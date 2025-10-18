function foo1() {
    if (x) {
        return y;
    } else {
        return z;
    }
}

function foo2() {
    if (x) {
        return y;
    } else {
        const t = "foo";
    }
}

function foo3() {
    if (error) {
        return 'It failed';
    } else {
        if (loading) {
            return "It's still loading";
        }
    }
}

// Two warnings for nested occurrences
function foo4() {
    if (x) {
        if (y) {
            return y;
        } else {
            return x;
        }
    } else {
        return z;
    }
}