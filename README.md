# "Tweet cards with interactivity"

# Goal:

The goal is to create tweet cards with interactivity upon clicking a button.

# Follow and Following:

The user card should have two states: Follow and Following.

# Execution criteria:

The layout is fixed in px, semantic, and valid. The work is done in React.

# Technical execution:

According to the design, user cards are implemented. Upon clicking the Follow
button, the text changes to Following. The button color also changes.
Additionally, your follower count is added to the initial count of 100,500
followers. Upon clicking the button, it becomes 100,501.

When the page is refreshed, the final result of the user's actions is recorded.
Thus, if the button is clicked and the page is refreshed, the button remains in
the Following state with the corresponding color, and the follower count does
not decrease to the initial value.

Upon clicking the button again, its text and color return to the initial state.
The follower count also decreases by 1 (100,500).

In the code, the number 100,500 is written as a single value (100500). In the
UI, it is displayed with a comma (100,500).

# Backend:

To develop the feature, a personal backend should be created using the UI
service mockapi.io.

# Additionally, routing using React Router was implemented, and the ability to filter cards was added.
