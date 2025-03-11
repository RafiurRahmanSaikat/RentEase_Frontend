import { Calendar, DollarSign } from "lucide-react"
import { useState } from "react"
import { RENT_DURATIONS } from "../../constants"
import { createRentRequest } from "../../services/interactionService"
import Button from "../ui/Button"
import Card from "../ui/Card"
import Select from "../ui/Select"
import Textarea from "../ui/Textarea"

const RentRequestForm = ({ house, onRequestSubmitted }) => {
  const [formData, setFormData] = useState({
    duration: 30,
    message: `I would like to rent ${house.title} for one month.`,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Update message when duration changes
    if (name === "duration") {
      const durationText =
        RENT_DURATIONS.find((d) => d.value === Number.parseInt(value))?.label.toLowerCase() || "one month"
      setFormData({
        ...formData,
        duration: value,
        message: `I would like to rent ${house.title} for ${durationText}.`,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await createRentRequest({
        house_id: house.id,
        duration: formData.duration,
        message: formData.message,
      })
      onRequestSubmitted()
    } catch (error) {

      console.error("Error submitting rent request:", error)

      setError(error[0]||"Failed to submit rent request. Please try again.")
    }
    finally {
      setIsSubmitting(false)
    }
  }

  // Calculate total price based on duration
  const calculateTotalPrice = () => {
    const price = Number.parseFloat(house.price)
    const days = Number.parseInt(formData.duration)
    return (price * days).toLocaleString()
  }

  return (
    <Card className="sticky top-24">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Request to Rent</h3>
        <div className="flex items-center mt-2">
          <DollarSign size={20} className="text-purple-600 dark:text-purple-400" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${Number.parseFloat(house.price).toLocaleString()}
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">/ day</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Select
          label="Rental Duration"
          name="duration"
          value={formData.duration}
          onChange={handleInputChange}
          options={RENT_DURATIONS}
          icon={<Calendar size={18} className="text-gray-400" />}
          required
        />

        <Textarea
          label="Message to Owner"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Introduce yourself and explain why you're interested in this property..."
          required
        />

        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-300">Price per day</span>
            <span className="font-medium text-gray-900 dark:text-white">
              ${Number.parseFloat(house.price).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-300">Duration</span>
            <span className="font-medium text-gray-900 dark:text-white">{formData.duration} days</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-900 dark:text-white">Total</span>
            <span className="font-bold text-purple-600 dark:text-purple-400">${calculateTotalPrice()}</span>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-3 text-center mx-auto bg-red-500  text-white rounded-lg text-base">
            {error}
          </div>
        )}

        <Button type="submit" fullWidth className="mt-4" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Rent Request"}
        </Button>

        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
          You won't be charged yet. The owner will review your request first.
        </p>
      </form>
    </Card>
  )
}

export default RentRequestForm

