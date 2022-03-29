State management is handled via redux and testing was done via react testing library.  Sufficient contrast is used between the background and foreground in line with best accessibility practices and heading tags are in descending order.

<b>State Management</b>
Redux state - Each input (email, password/username, colour, animal and tiger type) is stored within a reducer in the following format {value: 'value of input field - stored as string for all except animal which is an array', valid: boolean}

<b>Components</b>
Form - contains the 3 fieldsets and holds the data that determines the type of input within those fieldsets.

Paragraph section - contains the parent p element, an error class is added/removed from this element based upon the state of the child input, this class controls the border colour of the input. There is a label element inside the p element (this is rednered conditionally as not all inputs have labels ie submit).  There is also the input element (rendered dynamically based upon input type).

Input - input renders the input.  Contains a validity condition for each input type which is redefined on change of the element.

Submit - each time an input changes (and therefore the reducer) the state within submit is updated.  If all inputs are valid (tiger type validity is only checked if tiger is included in animal value array) then the form is able to be submitted on click, however if not - an error message is shown.
