# My Findings


 ### ChangeDetectionStrategy.OnPush 
 //view updated if an event emitted from itself or child components without changing any input object reference this means that it sets a dirty bit with cd.markForChecks() to render view with current data.

  constructor(private cd: ChangeDetectorRef) {
    //this.cd.detach();
  }

  ### ngDoCheck()
  //runs for parent component even CD detached. It means that CD cycle checks for attachement state and CD strategy to decide if it needs to go down further in the component's child and if it needs to update the view.
  
  
  ### this.cd.markForCheck(); 
  //detect changes during/by angular check cycle. Detector should be attached.
  
  ### this.cd.detectChanges(); 
  //detect changes after/outside angular check cycle
   

  ### ngOnChanges()
  // for object types called only if reference value changed

  ### ngAfterViewChecked()
  //even when CD detached runs for parent component but view is not updated  means that it does other checks to see if it needs to go down further in the component's child and if it needs to update the view.
   


