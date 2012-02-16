//set up the main scheduler
if(Sidebar.ENV === 'production'){
  var scheduler = Sidebar.scheduler(Options.getRefreshRate(),Topic.pull,true);
  scheduler.start();
}