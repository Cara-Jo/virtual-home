$(document).ready(function() {
    $.fn.tooltipster('setDefaults', {
  		contentAsHTML: true,
  		trigger: 'click',
  		animation: 'grow',
  		theme: 'tooltip-theme',
  		arrow: false,
  		onlyOne: true
	});
    $('#pool-tip').tooltipster({
        
        content: $('<div class="tooltip"><div class="tip-header"><h4>Energy Saving Tip</h4><span class="points">40 pts</span></div><div class="tip-content"><h3>Buy A Timer for Your Pool Pump</h3><p>Put your pool pump on a timer and set it to run for 4-6 hours each morning. Your pool pump may be one of the biggest users of energy in your house. Don\'t waste energy by running it 24/7 when it can filter your pool water in as little as four hours per day.</p></div><div class="tip-ratings"><a href=""></a><a href="" class="btn">Complete Tip</a></div></div>')
    });
});
