
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

        // add the button
        this.button = this.paramList.addParam("MyButton");

        // Show the gui form
        Host.GUI.runDialog(Host.GUI.Themes.getTheme(kPackageID), "MyForm", this);
        
        return Host.Results.kResultOk; 
    }

    // ---------------------------------------------------------------------

    this.performEdit = function (context)
    {    
        return Host.Results.kResultOk; 
    }

    // ---------------------------------------------------------------------

    // Act on GUI objects
    this.paramChanged = function (param)
    {
        //Host.GUI.alert(param.name)

        // Clicked the button
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