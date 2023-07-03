# odin-calculator
TOP foundations calculator project

I originally tried to solve this task by implementing a calculator that followed BIDMAS/PEMDAS rules, however this was too challenging and was making me put off work on the project so I decided to switch to a calculator that calculates inputs from left to right as specified in the project.

At this point in the project's development, the add, subtract, multiply and divide operations all work using the HTML buttons as well as the number buttons. You can press the equals button after inputting a valid set of operands and operators and the result is shown in the console.

Validation for the operands is done with a regular expression. At this stage of the project, the regex is /^((\-?[1-9][0-9]*)|(0))$/, meaning valid inputs are either 0 on its own, or a positive or negative number starting with a non-zero digit. This can be changed later if decimals are to be allowed.

The decimal button inputs a decimal to the list of inputted numbers/operators, but does not work with the calculator yet. The DEL key deletes the most recently entered input. All other buttons don't work.

My next task is to improve the HTML and include a display so that inputs can be tracked on the screen rather than needing to check the console.