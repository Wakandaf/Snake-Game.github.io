function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() *
            columns - 1) + 2) * scale;
        this.y = (Math.floor(Math.random() *
            rows - 1) + 2) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#0c4da2";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}