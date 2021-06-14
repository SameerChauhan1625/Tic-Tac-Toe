class Form{
    constructor(){
        this.input1 = createInput("Player1");
        this.input2 = createInput("Player2");
        this.title = createElement('h2');
        this.reset = createButton('RESET');
        this.button = createButton('Play');
    }

    display(){
        this.title.html("TIC TAC TOE");
        this.title.position(350,50);

        this.input1.position(400,300);

        this.input2.position(400,350);

        this.reset.position(900, 660);

        this.button.position(390,400);
        this.button.style('width', '200px');
        this.button.style('height', '40px');

        this.button.mousePressed(() => {
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            Gamestate = 1;
        });

        this.reset.mousePressed(() => {
            location.reload();
        })
    }
}