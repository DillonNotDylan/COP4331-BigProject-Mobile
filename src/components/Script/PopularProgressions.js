const popularProgs = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

const suggestions = []


function loopBackward (passedProg, chordPosition) {

    let i = 0
    let j = 0

    for(i = 0; i < popularProgs.length; i++) {
        if (i < chordPosition && passedProg[0] == popularProgs[0]) {
            if (i < chordPosition && passedProg[1] == popularProgs[1]) {
                if (i < chordPosition && passedProg[2] == popularProgs[2]) {
                    if (i < chordPosition && passedProg[3] == popularProgs[3]) {

                    }
                }
            }
        }
    }
}

function loopBackward () {

}

export function PopularProgressions (props) {
    loopForward()
    loopBackward()
}