const widget = new ListWidget();

let fm = FileManager.iCloud()// 
let image = fm.readImage(fm.documentsDirectory() + "/eren.png")

//calculate number of days until March 3
var today = new Date() 
var aot=new Date(today.getFullYear(), 2, 3);
var one_day=1000*60*60*24;
var num_days = Math.ceil((aot.getTime()-today.getTime())/(one_day));

//add text for number of days and position
let stack = widget.addStack()
const text2 =stack.addText(num_days.toString())
text2.font = Font.systemFont(45)
text2.textColor = Color.white();
text2.shadowColor = Color.black()
text2.shadowRadius=2
text2.shadowOffset = new Point(2,2)

const text = stack.addText("DAYS")
text.font = Font.systemFont(45)
text.textColor = Color.white();

text.shadowColor = Color.black()
text.shadowRadius=2
text.shadowOffset = new Point(2,2)

stack.spacing = 140

//add image to background and present the widget
widget.backgroundImage = image
Script.setWidget(widget)
widget.presentMedium()
Script.complete()
