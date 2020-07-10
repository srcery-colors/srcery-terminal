package main

import (
	"fmt"

	. "github.com/logrusorgru/aurora"
)

type Color struct {
	Name string
	Term uint8
	Hex  string
	RGB  string
}

type RGB struct {
	red   int
	green int
	blue  int
}

func main() {
	var colors []Color

	colors = append(colors, Color{Name: "black", Term: 0, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "red", Term: 1, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "green", Term: 2, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "yellow", Term: 3, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "blue", Term: 4, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "magenta", Term: 5, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "cyan", Term: 6, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "white", Term: 7, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_black", Term: 8, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_red", Term: 9, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_green", Term: 10, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_yellow", Term: 11, Hex: "#0c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_blue", Term: 12, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_magenta", Term: 13, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_cyan", Term: 14, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_white", Term: 15, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "orange", Term: 166, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "bright_orange", Term: 208, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "hard_black", Term: 233, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "xgray1", Term: 235, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "xgray2", Term: 236, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "xgray3", Term: 237, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "xgray4", Term: 238, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "xgray5", Term: 239, Hex: "#1c1B19", RGB: "28, 27, 25"})
	colors = append(colors, Color{Name: "xgray6", Term: 240, Hex: "#1c1B19", RGB: "28, 27, 25"})

	for _, c := range colors {
		fmt.Printf("%s\n", Index(c.Term, "█████████"))
	}
}
