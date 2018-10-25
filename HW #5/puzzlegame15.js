var numbers = new Array(16);
var dirty = new Array(16);
var empty_x;
var empty_y;
var scramble_seed = 173;
var move_count = -1;

function get_image_name(n) {
    return "square " + n;
}

function get_image_src(n) {
    if (n == 0) return "15/_.gif";
    else return "15/" + n + ".png";
}

function get_number_at_position(y, x) {
    i = (y - 1) * 4 + x - 1;
    return numbers[i];
}

function set_number_at_position(y, x, n) {
    i = (y - 1) * 4 + x - 1;
    numbers[i] = n;
    dirty[i] = 1;
}

function get_sign(d) {
    if (d < 0) return -1;
    if (d > 0) return 1;
    return 0;
}

function process_move(y, x) {
    step_x = get_sign(empty_x - x);
    step_y = get_sign(empty_y - y);
    if (step_x != 0 && step_y != 0)
        return;
    while (empty_x != x || empty_y != y) {
        set_number_at_position(empty_y, empty_x, get_number_at_position(
            empty_y - step_y, empty_x - step_x));
        empty_x -= step_x;
        empty_y -= step_y;
        if (move_count >= 0) move_count++;
    }
    set_number_at_position(empty_y, empty_x, 0);
}

function update_board() {
    for (i = 0; i < 16; i++) {
        if (dirty[i]) {
            document.images[get_image_name(i)].src =
                get_image_src(numbers[i]);
            dirty[i] = 0;
        }
    }
}

// Function call that checks to see if tile can be moved
// Calls two functions that move the tile and update the board
function click_to_move(y, x) {
    if (x != empty_x && y != empty_y) {
        window.status = "This piece can not move";
        return;
    }
    process_move(y, x);
    update_board();
}

// Resets the board back to its original state.
function reset_numbers() {
    for (y = 1; y <= 4; y++) {
        for (x = 1; x <= 4; x++) {
            n = (y - 1) * 4 + x;
            if (n == 16) n = 0;
            set_number_at_position(y, x, n);
        }
    }
    empty_x = 4;
    empty_y = 4;
    update_board();
    move_count = -1;
}

function pseudo_reset_numbers() {
    for (y = 1; y <= 4; y++) {
        for (x = 1; x <= 4; x++) {
            n = (y - 1) * 4 + x - 1;
            set_number_at_position(y, x, n);
        }
    }
    empty_x = 1;
    empty_y = 1;
    update_board();
    move_count = 0;
}

// Scrambles the board randomly
function scramble_numbers() {
    rand_x = 4;
    rand_y = 4;
    scramble_seed = (scramble_seed + 95) % 300;
    for (r = 0; r < 250 + scramble_seed; r++) {
        if (r % 2) {
            rand_x = empty_x;
            rand_y = (rand_y + (r * (r + 1) % 3)) % 4 + 1;
        } else {
            rand_x = (rand_x + (r * (r + 1) % 3)) % 4 + 1;
            rand_y = empty_y;
        }
        process_move(rand_y, rand_x);
    }
    update_board();
    move_count = 0;
}

reset_numbers();
