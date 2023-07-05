# odin-calculator
TOP foundations calculator project

I originally tried to solve this task by implementing a calculator that followed BIDMAS/PEMDAS rules, however this was too challenging and was making me put off work on the project so I decided to switch to a calculator that calculates inputs from left to right as specified in the project.

---

At this point in the project, every button works for the most part aside from decimal inputs still not being implemented, and with the underscore key still not being replaced by another key (I may change it to work as a power/index key). The AC button doesn't clear the Ans data either which it ought to do.

Validation for the operands is done with a regular expression. At this stage of the project, the regex is /^((\-?[1-9][0-9]*)|(0))$/, meaning valid inputs are either 0 on its own, or a positive or negative number starting with a non-zero digit. This can be changed later when I add decimals.

The calculator HTML is improved since the last README commit and every button pressed updates the on-screen display as you would expect a real calculator to do.

To follow along with the project criteria and specification, my next job is to round any decimal answers to a certain amount of decimal places so they aren't too long on the calculator screen. I will also have to make the AC button clear the Ans storage as well.

For the "extra credit" criteria, I should make decimal inputs valid, add keyboard/numpad support, and perhaps improve my CSS.