samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')

const gainnn = [
    "2",
    "{0.75 2.5}*4",
    "{0.75 2.5!9 0.75 2.5!5 0.75 2.5 0.75 2.5!7 0.75 2.5!3 <2.5 0.75> 2.5}%16",
]

const Structures = [
    "~",
    "a*4",
    "{a ~!9 a ~!5 a ~ a ~!7 a ~!3 < ~ a > ~}%16",
]

const gooo = 0
// off/on

bassline: note("[eb1, eb2]!16 [f2, f1]!16 [g2, g1]!16 [f2, f1]!8 [bb2,bb1]!8")
    .sound("supersaw")
    .slow(8)
    .postgain(2)
    .room(0.6)
    .lpf(slider(300, 300, 2000))
    .room(0.4)
    .postgain(pick(gainnn, gooo))
    ._punchcard({ height: 200, width: 1670 })


const arpeggiator = [
    "{d4 bb3 eb3 d3 bb2 eb2}%16",
    "{c4 bb3 f3 c3 bb2 f2}%16",
    "{d4 bb3 g3 d3 bb2 g2}%16",
    "{c4 bb3 f3 c3 bb2 f2}%16",
]

main_arp: note(pick(arpeggiator, "<0 1 2 3>".slow(2))) //.rev()
    .sound("supersaw")
    .lpf(300)
    .sustain(0.5).release(0.01).attack(0)
    .room(0.6)
    .lpenv(slider(1.55875, 1.25, 6))
    .postgain(pick(gainnn, gooo))
    ._punchcard({ height: 200, width: 1670 })


// drums: stack(
// s("tech:5").postgain(6).pcurve(2).pdec(1) .struct(pick(Structures,gooo)),
// )
// ._punchcard({height:200,width:1670})

drums: stack(
    s("tech:5").postgain(6).pcurve(2).pdec(1).struct(pick(Structures, gooo)),
    // s("{~ ~ ~ rim ~ cp ~ rim cp ~!2 rim ~ cp ~ < rim ~ >!2}%8").bank("[KorgDDM110,dmx]").speed(1.2).fast(2).postgain(6).velocity(".1"),
    // s("sh").struct("[x!3 ~!2 x!10 ~]").postgain(0.5).lpf(7000).bank("RolandTR808").speed(0.8).jux(rev).room(sine.segment(16).range(0,15)),
    // s("hh").struct("x*16").postgain(0.5).bank("RolandTR808").speed(1).jux(rev).room(sine.range(0.1, 0.4)).gain(".4!2 1 .4!2 1 .4 1").fast(2),
    // s("c~ hh").bank("RolandTR808").room(0.3).speed(0.75).gain(1.2).fast(4),
    // s("psr:[2|5|6|7|8|9|9|12|24|25]").fast(16).almostNever(ply("0")).hpf(1000).postgain(pick(gainnn, gooo)).velocity(".0001")
)
    ._punchcard({ height: 200, width: 1670 })

_$: note(`<
[a4 g4] [f4 d4] [f4 [f4 g4]] -
[a4 g4] [f4 [d4 f4]] [- [a5,f5]] [[g5,e5] [f5,c5]] 
[a4 g4] [f4 d4] [f4 [f4 g4]] [g4 -]
[f4,a4] [bb4 c5 ] [- - bb4 -] -
[a4 g4][f4 d4][f4 [f4 g4]] [g4 -]
[a4 g4] [f4 [d4 f4]] - -
[a4 g4][f4 d4][f4 [f4 g4]] [g4 -]
[ a4 - ] [g4 -  f4] - c5

b5 [b5 g5] [- g5] [f#5 g5]
[f5,a5] [b5 c6] - -
- db6 [c6 c6][b5 b5]
a5 - - [- a5]
g5 [g5 g5][- g5][f#5 g5]
[f5,a5][b5 c6][- a5][g5 a5]
b5 d5 [g5 f5][e5 f5]

- - - -

- [f5 e5] [f5 a5] -
- [g5 f#5] [g5 b5] -  
- g5 [g5 b5]  [-  a5]
~ [g5 f5] [- c5] -

- [f5 e5] [f5 a5] -
- [g5 f#5] [g5 b5] -  
[a5 g5] c5 [c5 g5] f5
[c5 g5] g5 [g5 a5] f5


>*4`)
.sound("piano").velocity("1")