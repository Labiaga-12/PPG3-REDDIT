
// MF COMMUNITY JAVASCRIPT

document.addEventListener("DOMContentLoaded", function() {

    // SEARCH FUNCTION
    let search = document.querySelector("input");

    if (search) {
        search.addEventListener("input", function() {

            let value = search.value.toLowerCase();

            let posts = document.querySelectorAll(
                ".content, .song, .quote, .game-post, .tiktok-post, .makeup-post, .kpop-post, .animal-post, .outfit-post, .food-post"
            );

            posts.forEach(function(post) {

                let text = post.textContent.toLowerCase();

                if (text.includes(value)) {
                    post.style.display = "";
                } else {
                    post.style.display = "none";
                }

            });
        });
    }

    // CLICKABLE HOMEPAGE CARDS
    let cards = document.querySelectorAll(".content[data-page]");

    cards.forEach(function(card) {

        card.addEventListener("click", function(event) {

            if (event.target.closest("button")) {
                return;
            }

            window.location.href = card.dataset.page;

        });
    });

    // LIKE AND UPVOTE BUTTONS
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {

        let originalText = button.textContent.trim();
        let text = originalText.toLowerCase();

        if (text.includes("like") || text.includes("upvote")) {

            let count = 0;

            button.addEventListener("click", function() {

                if (count === 0) {
                    count = 1;
                    button.textContent = originalText + " (" + count + ") ✓";
                } else {
                    count = 0;
                    button.textContent = originalText;
                }

            });

        }

        // POST YOUR STORY
        else if (text.includes("post your story")) {

            button.addEventListener("click", function() {

                let post = button.closest(".game-post");
                let textarea = post.querySelector("textarea");

                if (textarea.value.trim() === "") {
                    alert("Please write your story first!");
                    return;
                }

                let story = document.createElement("p");

                story.className = "comment";
                story.textContent = textarea.value;

                post.insertBefore(story, textarea);

                textarea.value = "";

                alert("Your story has been posted!");

            });

        }

        // COMMENT BUTTONS
        else if (text.includes("comment")) {

            button.addEventListener("click", function() {

                let message = prompt("Write your comment:");

                if (message && message.trim() !== "") {

                    let post = button.closest(
                        ".content, .song, .quote, .game-post, .tiktok-post, .makeup-post, .kpop-post, .animal-post, .outfit-post, .food-post"
                    );

                    if (post) {

                        let comment = document.createElement("p");

                        comment.className = "comment";
                        comment.textContent = message;

                        post.insertBefore(comment, button);

                    }

                }

            });

        }

    });

});
