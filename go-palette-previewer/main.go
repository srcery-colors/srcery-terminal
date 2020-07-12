package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/jedib0t/go-pretty/v6/table"
	"github.com/jedib0t/go-pretty/v6/text"
	"github.com/logrusorgru/aurora"
)

var au aurora.Aurora

var simple = flag.Bool("simple", false, "Simply output")
var srcery Srcery
var toJson = flag.Bool("json", false, "Output to a JSON file")
var verbose = flag.Bool("c", false, "Print color tags")

type Srcery struct {
	Colors []Color `json:"colors"`
}

type Color struct {
	Name string `json:"name"`
	Term uint8  `json:"term"`
	Hex  string `json:"hex"`
	RGB  RGB    `json:"rgb"`
}

type RGB struct {
	Red   int `json:"red"`
	Green int `json:"green"`
	Blue  int `json:"blue"`
}

func (v *RGB) ToString() string {
	return fmt.Sprintf("%d, %d, %d", v.Red, v.Green, v.Blue)
}

func init() {
	flag.Parse()
	au = aurora.NewAurora(true)

	// Import colors
	file, _ := os.OpenFile("colors.json", os.O_RDONLY, os.ModePerm)
	defer file.Close()

	dec := json.NewDecoder(file)

	if err := dec.Decode(&srcery); err != nil {
		log.Println(err)
	}
}

func main() {
	if *simple {
		for _, c := range srcery.Colors {
			fmt.Printf("%s | %s", au.Index(c.Term, "██████████"), c.Name)

			if *verbose {
				fmt.Printf("\n%d, %s, (%s)", c.Term, c.Hex, c.RGB.ToString())
			}

			fmt.Println()
		}

	} else {
		PrintTable()
	}
}

func PrintTable() {
	t := table.NewWriter()
	t.SetOutputMirror(os.Stdout)

	t.SetTitle("Srcery Colors")

	t.AppendHeader(table.Row{"Name", "Color", "Term", "Hex", "RGB"})
	t.AppendSeparator()

	for _, c := range srcery.Colors {
		t.AppendRow([]interface{}{c.Name, au.Index(c.Term, "██████████"), c.Term, c.Hex, c.RGB.ToString()})
		t.AppendSeparator()
	}

	t.SetStyle(table.StyleLight)
	t.Style().Title.Align = text.AlignCenter
	t.Render()
}
