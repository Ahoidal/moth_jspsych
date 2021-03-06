/*
 * Example plugin template
 */

// adds new property to jspsych object w/ name "rating-wheel"
//function- ensures that plugins are encapsulated and protected from other code
// enables persistence and state
jsPsych.plugins['rating-wheel'] = (function() {

  var plugin = {};
   plugin.info = {
    name: 'rating-wheel',
    description: '',
    parameters: {
       stimulus: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: undefined,
        no_function: false,
        description: ''
      },  
    timing_response: {
        type: [jsPsych.plugins.parameterType.INT],
        default: -1,
        no_function: false,
        description: ''
      },
    }
  }

  // plugin.create = function(params) {
  //   var trials =[]
  //   trials.push({

  //   });
  //   return trials

  // }

  // trial property added to jspsych rating wheel plugin object
  // two paramters- first is DOM element that will display jsPSych content, 2nd array of rial propeties from create method
  // must call jsPSyc. finsiht rial when is done running
  plugin.trial = function(display_element, trial) {

    // set default values for parameters
    trial.parameter = trial.parameter || 'default value';


    // display content display_element. html();
    // allow content to persist for certain amount of time
    //save the data- 
    //then finish trial

    // allow variables as functions
    // this allows any trial variable to be specified as a function
    // that will be evaluated when the trial runs. this allows users
    // to dynamically adjust the contents of a trial as a result
    // of other trials, among other uses. you can leave this out,
    // but in general it should be included
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    var rw_colors = [["#ED1F24"], ["#F48791"], ["#F29C70"], ["#FFF200"], ["#E7E515"], ["#9ECC3B"], ["#69BD45"], ["#0F733A"], ["#70C493"], ["#00AEEF"], ["#3B8FCD"], ["#0856A7"], ["#2E3192"], ["#5C59A7"], ["#B578B3"], ["#DA4C9B"]];
    var rw_names = [["anger"], ["pride"], ["elation"], ["joy"], ["satisfaction"], ["relief"], ["hope"], ["interest"], ["surprise"], ["sadness"], ["fear"], ["shame"], ["guilt"], ["envy"], ["disgust"], ["contempt"]];
    var rw_catInfo = rating_wheel.etc.categories(rw_names, rw_colors); var rw_fontInfo = rating_wheel.etc.font(20, "Helvetica"); 
    
    //create rating wheel object discrete with these params
    var rw_thisWheel = rating_wheel.discrete.wheel(260, 16, 3, 0.69, 0.01, 23, 0.25, rw_fontInfo, rw_catInfo);
    
    // function that renders rating wheel
    rating_wheel.render.go(rw_thisWheel);
  
    
        // end trial if time limit is set
    if (trial.timing_response > 0) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.timing_response);
    }
    
    // function to end trial when it is time
    var end_trial = function() {

      // gather the data to store for the trial
      var trial_data = {
      parameter_name: 'parameter value'
      };
        //list of all things clicked- JSON var click function etc 
        //stimulus: JSON.stringify(trial.sources)

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    }

  };

    //if (trial.cont_btn) { display_element.querySelector('#'+trial.cont_btn).addEventListener('click', finish); }
    // data saving

  return plugin;
})();


