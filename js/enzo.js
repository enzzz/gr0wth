jQuery(function($, undefined) {
    window.last_command = '';
    $('#term_demo').terminal(function(command, term) {
        if (command == 'help') {
	    term.echo('USAGE: Type your favorite command');
	    term.echo('help: displays this message!');
	} else if (window.last_command == "name") {
	    term.set_prompt("> ");
	    term.echo("Hi " + command + " my name is Enzo!");
	} else if (command == "name") {
	    term.set_prompt("");
	    term.echo("What is your name?");
        } else if (command == '') {
	    term.echo('');
        } else {
	    term.echo("I'm sorry, I don't know that command. Type 'help' for more options");
	}
	window.last_command = command;
    }, {
        greetings: "Enzo's glorious terminal!",
        name: 'js_demo',
        prompt: '> '});
});
