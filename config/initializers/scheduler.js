//set up the main scheduler
var scheduler = Sidebar.scheduler(Options.getRefreshRate(),Topic.pull,true);
scheduler.start();
