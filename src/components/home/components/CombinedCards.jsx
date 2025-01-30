import React from "react";
import { GradientHoverCard } from "../../ui/cards/GradientHoverCard";

export default function CombinedCards() {
  return (
    <div className={`min-h-screen p-8`}>
      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        <GradientHoverCard
          className="p-4"
          description="This is the best library for creating dynamic cards"
          title="CuiCui"
        >
          You can also add content inside the card
        </GradientHoverCard>

        <GradientHoverCard
          description="How fast is it now to create cards"
          title="Just crazy"
        >
          If leave the card empty, it will still look good
        </GradientHoverCard>

        {/* <CardMouseHighlightingBorder
          title="Another Example"
          content="You can create multiple cards with different effects"
        />
        <CardMouseHighlightingBorder
          title="Highlighting Border"
          content="This card has a mouse-following highlighting border"
        /> */}
      </div>
    </div>
  );
}
