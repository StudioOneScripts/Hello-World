
const kPackageID = "Hello World Example";

function myScript() 
{
    this.interfaces =
    [
        Host.Interfaces.IEditTask,
        Host.Interfaces.IParamObserver,
        Host.Interfaces.IController
    ]

    // ---------------------------------------------------------------------
    
    this.prepareEdit = function (context)
    {        
        // parameter list for gui objects
        this.paramList = Host.Classes.createInstance("CCL:ParamList")
        this.paramList.controller = this;

        // add the form button to the param list
        this.button = this.paramList.addParam("MyButton");

        // show the gui form
        Host.GUI.runDialog(Host.GUI.Themes.getTheme(kPackageID), "MyForm", this);
        
        return Host.Results.kResultOk; 
    }

    // ---------------------------------------------------------------------

    this.performEdit = function (context)
    {    
        return Host.Results.kResultOk; 
    }

    // ---------------------------------------------------------------------

    // act on GUI object param changes
    this.paramChanged = function (param)
    {
        // clicked the button
        if (param == this.button)
        {
            Host.GUI.alert("Hello World!");
        } 
        
        return Host.Results.kResultOk; 
    }
}

// ---------  ENTRY FUNCTION  ------------------------------------------

function createInstance()
{
    return new myScript;
}
