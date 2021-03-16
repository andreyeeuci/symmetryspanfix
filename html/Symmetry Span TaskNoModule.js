/*************************** 
 * Symmetry Span Task Test *
 ***************************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'Symmetry Span Task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin);
flowScheduler.add(InstructionsRoutineEachFrame);
flowScheduler.add(InstructionsRoutineEnd);
const memory_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(memory_trialsLoopBegin, memory_trialsLoopScheduler);
flowScheduler.add(memory_trialsLoopScheduler);
flowScheduler.add(memory_trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.1.2';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var InstructionsClock;
var instuctions_1;
var Reset_sequenceClock;
var Square_presClock;
var fixation_1;
var grid;
var square;
var Sym_trialsClock;
var symmetry_grid;
var text;
var Square_recallClock;
var recall_text;
var instructions_2;
var fixation_2;
var grid_2;
var square_resp;
var square_1;
var square_2;
var square_3;
var square_4;
var square_5;
var square_6;
var square_7;
var square_8;
var square_9;
var square_10;
var square_11;
var square_12;
var square_13;
var square_14;
var square_15;
var square_16;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instuctions_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instuctions_1',
    text: 'In this task you will be required to memorise the location of a red square on a 4x4 grid. After each red square trial you will be presented with symmetry span trial where will be required to judge whether the presented image is VERTICALLY symmetrical. Press left arrow if the image is vertically symmetrical and right arrow if it is not. Square and symmetry trials will be repeated untill you will be asked to recall the location of the red square from all trials in the order that you saw them. Press space to continue.',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Reset_sequence"
  Reset_sequenceClock = new util.Clock();
  // Initialize components for Routine "Square_pres"
  Square_presClock = new util.Clock();
  fixation_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_1',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  grid = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid', units : undefined, 
    image : 'grid.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  square = new visual.Rect ({
    win: psychoJS.window, name: 'square',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([0.804, (- 1.0), (- 1.0)]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  // Initialize components for Routine "Sym_trials"
  Sym_trialsClock = new util.Clock();
  symmetry_grid = new visual.ImageStim({
    win : psychoJS.window,
    name : 'symmetry_grid', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '<-    symmetrical  |  non-symmetrical ->',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Square_recall"
  Square_recallClock = new util.Clock();
  recall_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_text',
    text: 'Recall',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_2',
    text: 'Select square locations in order that you saw them',
    font: 'Arial',
    units : undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  fixation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_2',
    text: '+',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  grid_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_2', units : undefined, 
    image : 'grid.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  square_resp = new core.Mouse({
    win: psychoJS.window,
  });
  square_resp.mouseClock = new util.Clock();
  square_1 = new visual.Rect ({
    win: psychoJS.window, name: 'square_1',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.225), 0.225],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  square_2 = new visual.Rect ({
    win: psychoJS.window, name: 'square_2',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.075), 0.225],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  square_3 = new visual.Rect ({
    win: psychoJS.window, name: 'square_3',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.075, 0.225],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  square_4 = new visual.Rect ({
    win: psychoJS.window, name: 'square_4',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.225, 0.225],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  square_5 = new visual.Rect ({
    win: psychoJS.window, name: 'square_5',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.225), 0.075],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  square_6 = new visual.Rect ({
    win: psychoJS.window, name: 'square_6',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.075), 0.075],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -10, interpolate: true,
  });
  
  square_7 = new visual.Rect ({
    win: psychoJS.window, name: 'square_7',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.075, 0.075],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -11, interpolate: true,
  });
  
  square_8 = new visual.Rect ({
    win: psychoJS.window, name: 'square_8',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.225, 0.075],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -12, interpolate: true,
  });
  
  square_9 = new visual.Rect ({
    win: psychoJS.window, name: 'square_9',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.225), (- 0.075)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -13, interpolate: true,
  });
  
  square_10 = new visual.Rect ({
    win: psychoJS.window, name: 'square_10',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.075), (- 0.075)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -14, interpolate: true,
  });
  
  square_11 = new visual.Rect ({
    win: psychoJS.window, name: 'square_11',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.075, (- 0.075)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -15, interpolate: true,
  });
  
  square_12 = new visual.Rect ({
    win: psychoJS.window, name: 'square_12',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.225, (- 0.075)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -16, interpolate: true,
  });
  
  square_13 = new visual.Rect ({
    win: psychoJS.window, name: 'square_13',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.225), (- 0.225)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -17, interpolate: true,
  });
  
  square_14 = new visual.Rect ({
    win: psychoJS.window, name: 'square_14',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [(- 0.075), (- 0.225)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -18, interpolate: true,
  });
  
  square_15 = new visual.Rect ({
    win: psychoJS.window, name: 'square_15',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.075, (- 0.225)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -19, interpolate: true,
  });
  
  square_16 = new visual.Rect ({
    win: psychoJS.window, name: 'square_16',
    units: 'height',
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0.225, (- 0.225)],
    lineWidth: 1, lineColor: new util.Color(undefined),
    fillColor: new util.Color([1.0, 0.004, 0.004]),
    opacity: 1, depth: -20, interpolate: true,
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var key_resp;
var InstructionsComponents;
function InstructionsRoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  InstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(instuctions_1);
  InstructionsComponents.push(key_resp);
  
  InstructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function InstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instuctions_1* updates
  if (t >= 0.0 && instuctions_1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instuctions_1.tStart = t;  // (not accounting for frame time here)
    instuctions_1.frameNStart = frameN;  // exact frame index
    instuctions_1.setAutoDraw(true);
  }

  
  // *key_resp* updates
  if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp.tStart = t;  // (not accounting for frame time here)
    key_resp.frameNStart = frameN;  // exact frame index
    key_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp.rt = key_resp.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  InstructionsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEnd() {
  //------Ending Routine 'Instructions'-------
  InstructionsComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  
  // check responses
  if (key_resp.keys === undefined || key_resp.keys.length === 0) {    // No response was made
      key_resp.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
  if (typeof key_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
      routineTimer.reset();
      }
  
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var memory_trials;
var currentLoop;
var trialIterator;
function memory_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  memory_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'choose_cond.xlsx',
    seed: undefined, name: 'memory_trials'});
  psychoJS.experiment.addLoop(memory_trials); // add the loop to the experiment
  currentLoop = memory_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = memory_trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisMemory_trial = result.value;
    thisScheduler.add(importConditions(memory_trials));
    thisScheduler.add(Reset_sequenceRoutineBegin);
    thisScheduler.add(Reset_sequenceRoutineEachFrame);
    thisScheduler.add(Reset_sequenceRoutineEnd);
    const sym_trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(sym_trialsLoopBegin, sym_trialsLoopScheduler);
    thisScheduler.add(sym_trialsLoopScheduler);
    thisScheduler.add(sym_trialsLoopEnd);
    const recallLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(recallLoopBegin, recallLoopScheduler);
    thisScheduler.add(recallLoopScheduler);
    thisScheduler.add(recallLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisMemory_trial));
  }

  return Scheduler.Event.NEXT;
}

var sym_trials;
function sym_trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  sym_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: condition_file,
    seed: undefined, name: 'sym_trials'});
  psychoJS.experiment.addLoop(sym_trials); // add the loop to the experiment
  currentLoop = sym_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = sym_trials[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisSym_trial = result.value;
    thisScheduler.add(importConditions(sym_trials));
    thisScheduler.add(Square_presRoutineBegin);
    thisScheduler.add(Square_presRoutineEachFrame);
    thisScheduler.add(Square_presRoutineEnd);
    thisScheduler.add(Sym_trialsRoutineBegin);
    thisScheduler.add(Sym_trialsRoutineEachFrame);
    thisScheduler.add(Sym_trialsRoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisSym_trial));
  }

  return Scheduler.Event.NEXT;
}


function sym_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(sym_trials);

  return Scheduler.Event.NEXT;
}

var recall;
function recallLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  recall = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'recall'});
  psychoJS.experiment.addLoop(recall); // add the loop to the experiment
  currentLoop = recall;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trialIterator = recall[Symbol.iterator]();
  while(true) {
    let result = trialIterator.next();
    if (result.done);
      break;
    let thisRecall = result.value;
    thisScheduler.add(importConditions(recall));
    thisScheduler.add(Square_recallRoutineBegin);
    thisScheduler.add(Square_recallRoutineEachFrame);
    thisScheduler.add(Square_recallRoutineEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, thisRecall));
  }

  return Scheduler.Event.NEXT;
}


function recallLoopEnd() {
  psychoJS.experiment.removeLoop(recall);

  return Scheduler.Event.NEXT;
}


function memory_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(memory_trials);

  return Scheduler.Event.NEXT;
}

var Reset_sequenceComponents;
function Reset_sequenceRoutineBegin() {
  //------Prepare to start Routine 'Reset_sequence'-------
  t = 0;
  Reset_sequenceClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // keep track of which components have finished
  Reset_sequenceComponents = [];
  
  Reset_sequenceComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Reset_sequenceRoutineEachFrame() {
  //------Loop for each frame of Routine 'Reset_sequence'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Reset_sequenceClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Reset_sequenceComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Reset_sequenceRoutineEnd() {
  //------Ending Routine 'Reset_sequence'-------
  Reset_sequenceComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // the Routine "Reset_sequence" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Square_presComponents;
function Square_presRoutineBegin() {
  //------Prepare to start Routine 'Square_pres'-------
  t = 0;
  Square_presClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  square.setPos(square_pos);
  // keep track of which components have finished
  Square_presComponents = [];
  Square_presComponents.push(fixation_1);
  Square_presComponents.push(grid);
  Square_presComponents.push(square);
  
  Square_presComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function Square_presRoutineEachFrame() {
  //------Loop for each frame of Routine 'Square_pres'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Square_presClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixation_1* updates
  if (t >= 0.0 && fixation_1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixation_1.tStart = t;  // (not accounting for frame time here)
    fixation_1.frameNStart = frameN;  // exact frame index
    fixation_1.setAutoDraw(true);
  }

  frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixation_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixation_1.setAutoDraw(false);
  }
  
  // *grid* updates
  if (t >= 0.5 && grid.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    grid.tStart = t;  // (not accounting for frame time here)
    grid.frameNStart = frameN;  // exact frame index
    grid.setAutoDraw(true);
  }

  frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (grid.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    grid.setAutoDraw(false);
  }
  
  // *square* updates
  if (t >= 0.5 && square.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square.tStart = t;  // (not accounting for frame time here)
    square.frameNStart = frameN;  // exact frame index
    square.setAutoDraw(true);
  }

  frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (square.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    square.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Square_presComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Square_presRoutineEnd() {
  //------Ending Routine 'Square_pres'-------
  Square_presComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  return Scheduler.Event.NEXT;
}

var sym_resp;
var Sym_trialsComponents;
function Sym_trialsRoutineBegin() {
  //------Prepare to start Routine 'Sym_trials'-------
  t = 0;
  Sym_trialsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  symmetry_grid.setImage(picture);
  sym_resp = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  Sym_trialsComponents = [];
  Sym_trialsComponents.push(symmetry_grid);
  Sym_trialsComponents.push(sym_resp);
  Sym_trialsComponents.push(text);
  
  Sym_trialsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}


function Sym_trialsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Sym_trials'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Sym_trialsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *symmetry_grid* updates
  if (t >= 0 && symmetry_grid.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    symmetry_grid.tStart = t;  // (not accounting for frame time here)
    symmetry_grid.frameNStart = frameN;  // exact frame index
    symmetry_grid.setAutoDraw(true);
  }

  
  // *sym_resp* updates
  if (t >= 0 && sym_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    sym_resp.tStart = t;  // (not accounting for frame time here)
    sym_resp.frameNStart = frameN;  // exact frame index
    sym_resp.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { sym_resp.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (sym_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['left', 'right']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
      psychoJS.experiment.experimentEnded = true;
    }
    
    if (theseKeys.length > 0) {  // at least one key was pressed
      sym_resp.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      sym_resp.rt = sym_resp.clock.getTime();
      // was this 'correct'?
      if (sym_resp.keys == sym_corr) {
          sym_resp.corr = 1;
      } else {
          sym_resp.corr = 0;
      }
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  
  // *text* updates
  if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Sym_trialsComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Sym_trialsRoutineEnd() {
  //------Ending Routine 'Sym_trials'-------
  Sym_trialsComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  
  // check responses
  if (sym_resp.keys === undefined || sym_resp.keys.length === 0) {    // No response was made
      sym_resp.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (sym_resp.keys === undefined) {
    if (['None','none',undefined].includes(sym_corr)) {
       sym_resp.corr = 1  // correct non-response
    } else {
       sym_resp.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('sym_resp.keys', sym_resp.keys);
  psychoJS.experiment.addData('sym_resp.corr', sym_resp.corr);
  if (typeof sym_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('sym_resp.rt', sym_resp.rt);
      routineTimer.reset();
      }
  
  // the Routine "Sym_trials" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var gotValidClick;
var Square_recallComponents;
function Square_recallRoutineBegin() {
  //------Prepare to start Routine 'Square_recall'-------
  t = 0;
  Square_recallClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // setup some python lists for storing info about the square_resp
  square_resp.clicked_name = [];
  gotValidClick = false; // until a click is received
  // keep track of which components have finished
  Square_recallComponents = [];
  Square_recallComponents.push(recall_text);
  Square_recallComponents.push(instructions_2);
  Square_recallComponents.push(fixation_2);
  Square_recallComponents.push(grid_2);
  Square_recallComponents.push(square_resp);
  Square_recallComponents.push(square_1);
  Square_recallComponents.push(square_2);
  Square_recallComponents.push(square_3);
  Square_recallComponents.push(square_4);
  Square_recallComponents.push(square_5);
  Square_recallComponents.push(square_6);
  Square_recallComponents.push(square_7);
  Square_recallComponents.push(square_8);
  Square_recallComponents.push(square_9);
  Square_recallComponents.push(square_10);
  Square_recallComponents.push(square_11);
  Square_recallComponents.push(square_12);
  Square_recallComponents.push(square_13);
  Square_recallComponents.push(square_14);
  Square_recallComponents.push(square_15);
  Square_recallComponents.push(square_16);
  
  Square_recallComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
     });
  
  return Scheduler.Event.NEXT;
}

var prevButtonState;
function Square_recallRoutineEachFrame() {
  //------Loop for each frame of Routine 'Square_recall'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Square_recallClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *recall_text* updates
  if (t >= 0.0 && recall_text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    recall_text.tStart = t;  // (not accounting for frame time here)
    recall_text.frameNStart = frameN;  // exact frame index
    recall_text.setAutoDraw(true);
  }

  
  // *instructions_2* updates
  if (t >= 0.0 && instructions_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructions_2.tStart = t;  // (not accounting for frame time here)
    instructions_2.frameNStart = frameN;  // exact frame index
    instructions_2.setAutoDraw(true);
  }

  
  // *fixation_2* updates
  if (t >= 0.0 && fixation_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixation_2.tStart = t;  // (not accounting for frame time here)
    fixation_2.frameNStart = frameN;  // exact frame index
    fixation_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixation_2.setAutoDraw(false);
  }
  
  // *grid_2* updates
  if (t >= 0.5 && grid_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    grid_2.tStart = t;  // (not accounting for frame time here)
    grid_2.frameNStart = frameN;  // exact frame index
    grid_2.setAutoDraw(true);
  }

  // *square_resp* updates
  if (t >= 0.5 && square_resp.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_resp.tStart = t;  // (not accounting for frame time here)
    square_resp.frameNStart = frameN;  // exact frame index
    square_resp.status = PsychoJS.Status.STARTED;
    square_resp.mouseClock.reset();
    prevButtonState = square_resp.getPressed();  // if button is down already this ISN'T a new click
    }
  if (square_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
    let buttons = square_resp.getPressed();
    if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
      prevButtonState = buttons;
      if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
        // check if the mouse was inside our 'clickable' objects
        gotValidClick = false;
        for (const obj of [square_1, square_2, square_3, square_4, square_5, square_6, square_7, square_8, square_9, square_10, square_11, square_12, square_13, square_14, square_15, square_16]) {
          if (obj.contains(square_resp)) {
            gotValidClick = true;
            square_resp.clicked_name.push(obj.name)
          }
        }
        if (gotValidClick === true) { // abort routine on response
          continueRoutine = false;
        }
      }
    }
  }
  
  // *square_1* updates
  if (t >= 0.5 && square_1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_1.tStart = t;  // (not accounting for frame time here)
    square_1.frameNStart = frameN;  // exact frame index
    square_1.setAutoDraw(true);
  }

  
  // *square_2* updates
  if (t >= 0.5 && square_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_2.tStart = t;  // (not accounting for frame time here)
    square_2.frameNStart = frameN;  // exact frame index
    square_2.setAutoDraw(true);
  }

  
  // *square_3* updates
  if (t >= 0.5 && square_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_3.tStart = t;  // (not accounting for frame time here)
    square_3.frameNStart = frameN;  // exact frame index
    square_3.setAutoDraw(true);
  }

  
  // *square_4* updates
  if (t >= 0.5 && square_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_4.tStart = t;  // (not accounting for frame time here)
    square_4.frameNStart = frameN;  // exact frame index
    square_4.setAutoDraw(true);
  }

  
  // *square_5* updates
  if (t >= 0.5 && square_5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_5.tStart = t;  // (not accounting for frame time here)
    square_5.frameNStart = frameN;  // exact frame index
    square_5.setAutoDraw(true);
  }

  
  // *square_6* updates
  if (t >= 0.5 && square_6.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_6.tStart = t;  // (not accounting for frame time here)
    square_6.frameNStart = frameN;  // exact frame index
    square_6.setAutoDraw(true);
  }

  
  // *square_7* updates
  if (t >= 0.5 && square_7.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_7.tStart = t;  // (not accounting for frame time here)
    square_7.frameNStart = frameN;  // exact frame index
    square_7.setAutoDraw(true);
  }

  
  // *square_8* updates
  if (t >= 0.5 && square_8.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_8.tStart = t;  // (not accounting for frame time here)
    square_8.frameNStart = frameN;  // exact frame index
    square_8.setAutoDraw(true);
  }

  
  // *square_9* updates
  if (t >= 0.5 && square_9.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_9.tStart = t;  // (not accounting for frame time here)
    square_9.frameNStart = frameN;  // exact frame index
    square_9.setAutoDraw(true);
  }

  
  // *square_10* updates
  if (t >= 0.5 && square_10.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_10.tStart = t;  // (not accounting for frame time here)
    square_10.frameNStart = frameN;  // exact frame index
    square_10.setAutoDraw(true);
  }

  
  // *square_11* updates
  if (t >= 0.5 && square_11.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_11.tStart = t;  // (not accounting for frame time here)
    square_11.frameNStart = frameN;  // exact frame index
    square_11.setAutoDraw(true);
  }

  
  // *square_12* updates
  if (t >= 0.5 && square_12.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_12.tStart = t;  // (not accounting for frame time here)
    square_12.frameNStart = frameN;  // exact frame index
    square_12.setAutoDraw(true);
  }

  
  // *square_13* updates
  if (t >= 0.5 && square_13.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_13.tStart = t;  // (not accounting for frame time here)
    square_13.frameNStart = frameN;  // exact frame index
    square_13.setAutoDraw(true);
  }

  
  // *square_14* updates
  if (t >= 0.5 && square_14.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_14.tStart = t;  // (not accounting for frame time here)
    square_14.frameNStart = frameN;  // exact frame index
    square_14.setAutoDraw(true);
  }

  
  // *square_15* updates
  if (t >= 0.5 && square_15.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_15.tStart = t;  // (not accounting for frame time here)
    square_15.frameNStart = frameN;  // exact frame index
    square_15.setAutoDraw(true);
  }

  
  // *square_16* updates
  if (t >= 0.5 && square_16.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    square_16.tStart = t;  // (not accounting for frame time here)
    square_16.frameNStart = frameN;  // exact frame index
    square_16.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  Square_recallComponents.forEach( function(thisComponent) {
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
    }});
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Square_recallRoutineEnd() {
  //------Ending Routine 'Square_recall'-------
  Square_recallComponents.forEach( function(thisComponent) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }});
  // store data for thisExp (ExperimentHandler)
  const xys = square_resp.getPos();
  const buttons = square_resp.getPressed();
  psychoJS.experiment.addData('square_resp.x', xys[0]);
  psychoJS.experiment.addData('square_resp.y', xys[1]);
  psychoJS.experiment.addData('square_resp.leftButton', buttons[0]);
  psychoJS.experiment.addData('square_resp.midButton', buttons[1]);
  psychoJS.experiment.addData('square_resp.rightButton', buttons[2]);
  if (square_resp.clicked_name.length > 0) {
    psychoJS.experiment.addData('square_resp.clicked_name', square_resp.clicked_name[0]);}
  // the Routine "Square_recall" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisScheduler, thisTrial) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      thisScheduler.stop();
    } else if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
