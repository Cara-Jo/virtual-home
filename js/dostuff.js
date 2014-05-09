$(document).ready(function() {
    $.fn.tooltipster('setDefaults', {
  		contentAsHTML: true,
  		trigger: 'click',
  		animation: 'grow',
  		theme: 'tooltip-theme',
  		arrow: false,
  		onlyOne: true,
      fixedWidth: '360'
	});
    $('#pool-tip').tooltipster({
        position: 'right',
        content: $('<div class="tooltip"><div class="tip-header"><h4>Energy Saving Tip</h4><span class="points">40 pts</span></div><div class="tip-content"><h3>Buy A Timer for Your Pool Pump</h3><p>Put your pool pump on a timer and set it to run for 4-6 hours each morning. Your pool pump may be one of the biggest users of energy in your house. Don\'t waste energy by running it 24/7 when it can filter your pool water in as little as four hours per day.</p></div><div class="tip-ratings"><a href=""></a><a href="" class="btn">Complete Tip</a></div></div>')
    });

     $('#window-tip').tooltipster({
        position: 'left',
        content: $('<div class="tooltip"><div class="tip-header"><h4>Energy Saving Tip</h4><span class="points">40 pts</span></div><div class="tip-content"><h3>Keep Out the Sun</h3><p>Close window blinds or curtains before you leave home during hot summer days. All that insulation that keeps you warm in the winter, will also keep the summer heat in, creating a lot more work for your air conditioner.</p></div><div class="tip-ratings"><a href=""></a><a href="" class="btn">Complete Tip</a></div></div>')
    });

    $('#duct-tip').tooltipster({
        position: 'right',
        content: $('<div class="tooltip"><div class="tip-header"><h4>Energy Saving Tip</h4><span class="points">40 pts</span></div><div class="tip-content"><h3>Duct, Duct, Loose?</h3><p>Make sure your HVAC is working for you. Have a professional inspect and seal your air ducts to make sure your HVAC is working efficiently.</p></div><div class="tip-ratings"><a href=""></a><a href="" class="btn">Complete Tip</a></div></div>')
    });
    $('#coffee-tip').tooltipster({
        position: 'left',
        content: $('<div class="tooltip"><div class="tip-header"><h4>Energy Saving Tip</h4><span class="points">40 pts</span></div><div class="tip-content"><h3>Coffee that Sips Energy</h3><p>Check to see if your coffeemaker has a power management feature. If it does, use it. If not, consider buying one to save energy without having to unplug after each use.</p></div><div class="tip-ratings"><a href=""></a><a href="" class="btn">Complete Tip</a></div></div>')
    });
    $('#lights-tip').tooltipster({
        position: 'left',
        content: $('<div class="tooltip"><div class="tip-header"><h4>Energy Saving Tip</h4><span class="points">40 pts</span></div><div class="tip-content"><h3>Turn It Off When You Leave the Room</h3><p>Turn off lights, TVs and computers when not in use. Configure sleep settings for your computer to go to sleep after 15 minutes of idle activity. Don\'t waste money on lighting and devices that you\'re not using.</p></div><div class="tip-ratings"><a href=""></a><a href="" class="btn">Complete Tip</a></div></div>')
    });
    $('#dishwasher-tip').tooltipster({
        position: 'left',
        content: $('<div class="tooltip"><div class="tip-header"><h4>Energy Saving Tip</h4><span class="points">40 pts</span></div><div class="tip-content"><h3>Ecomode is Ecofriendly</h3><p>Use your dishwasher\'s economy mode for less soiled dishes. If you use your dishwasher often, tweaking your settings can help you save a good morsel of energy.</p></div><div class="tip-ratings"><a href=""></a><a href="" class="btn">Complete Tip</a></div></div>')
    });
    $('#fridge-tip').tooltipster({
        position: 'left',
        content: $('<div class="tooltip"><div class="tip-header"><h4>Energy Saving Tip</h4><span class="points">40 pts</span></div><div class="tip-content"><h3>Not Too Frigid, Not Too Warm</h3><p>Consider adjusting your refrigerator temperature settings. A couple degrees warmer can make a big difference. When possible, keep your fridge and freezer doors closed and keep them filled to most efficiently cool and preserve your food.</p></div><div class="tip-ratings"><a href=""></a><a href="" class="btn">Complete Tip</a></div></div>')
    });
    $('#mailbox-tip').tooltipster({
        position: 'left',
        content: $('<div class="tooltip program"><div class="tip-header"><h4>Program</h4><span class="points">500 pts</span></div><div class="tip-content"><h3>Connect with Your Energy Use</h3><p>With My Account you can pay your SDG&E bill securely and when it\'s convenient for you. You\'ll also find a variety of tips and tools to help you manage your energy use.</p></div><div class="tip-ratings"><a href=""></a><p><i>Program completion will be verified by your utility.</i></p><a href="" class="btn">Complete Program</a></div></div>')
    });
});
