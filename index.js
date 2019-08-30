$(function () {
    //creating listner for click of the Add item  button
    $("#js-shopping-list-form").submit(function(event){
        event.preventDefault();
        //get the input data
        const userTextElement = $(this).find('#shopping-list-entry');
        // add the new item 
        $('ul').append(
            `<li>
                <span class="shopping-item">${userTextElement.val()}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
        // clear the input
        userTextElement.val("");
    });
        // creating listener for click on the check button
        $('.shopping-list').on('click', '.shopping-item-toggle', (function(event){
            // Select the closest parent li, find the shopping-item class that has the text, and toggle on and off the class shopping-item__checked
            $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        }));

        // Create listener for click on the delete button
        $('.shopping-list').on('click', '.shopping-item-delete', (function(event){
            // Select the closest partent li and remove it
            $(this).closest('li').remove();
        }));
});