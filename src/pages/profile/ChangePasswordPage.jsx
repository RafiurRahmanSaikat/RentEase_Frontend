import { AlertCircle, ArrowLeft, Lock, Save } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button.jsx';
import Card from '../../components/ui/Card.jsx';
import Input from '../../components/ui/Input.jsx';
import Spinner from '../../components/ui/Spinner.jsx';
import { changePassword } from '../../services/authService';

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    current_password: '',
    new_password: '',
    confirm_password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }

    if (generalError) {
      setGeneralError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.current_password) {
      newErrors.current_password = 'Current password is required';
    }

    if (!formData.new_password) {
      newErrors.new_password = 'New password is required';
    } else if (formData.new_password.length < 8) {
      newErrors.new_password = 'Password must be at least 8 characters';
    }

    if (formData.new_password !== formData.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setGeneralError('');

    try {
      await changePassword({
        old_password: formData.current_password,
        new_password: formData.new_password
      });

      window.toast?.success('Password changed successfully');
      navigate('/profile');
    } catch (error) {
      console.error('Error changing password:', error);

      if (error.old_password) {
        setErrors({ current_password: error.old_password[0] || 'Invalid current password' });
      } else if (error.new_password) {
        setErrors({ new_password: error.new_password[0] });
      } else if (error.detail) {
        setGeneralError(error.detail);
      } else if (error.message) {
        setGeneralError(error.message);
      } else {
        setGeneralError('Failed to change password. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center text-purple-600 dark:text-purple-400 hover:underline"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Profile
        </button>
      </div>

      <Card>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Change Password</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Update your account password</p>
        </div>

        {generalError && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-start">
            <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
            <p>{generalError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            label="Current Password"
            name="current_password"
            value={formData.current_password}
            onChange={handleInputChange}
            placeholder="Enter your current password"
            error={errors.current_password}
            icon={<Lock size={18} className="text-gray-400" />}
            required
          />

          <Input
            type="password"
            label="New Password"
            name="new_password"
            value={formData.new_password}
            onChange={handleInputChange}
            placeholder="Enter your new password"
            error={errors.new_password}
            icon={<Lock size={18} className="text-gray-400" />}
            required
          />

          <Input
            type="password"
            label="Confirm New Password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleInputChange}
            placeholder="Confirm your new password"
            error={errors.confirm_password}
            icon={<Lock size={18} className="text-gray-400" />}
            required
          />

          <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/profile')}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="flex items-center"
              >
                {loading ? (
                  <>
                    <Spinner size="sm" color="white" className="mr-2" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Save size={18} className="mr-2" />
                    Update Password
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ChangePasswordPage;
