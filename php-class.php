<?php

class Rectangle
{
    private $width;
    private $height;

    public function __construct($width = 0, $height = 0)
    {
        $this->width = $width;
        $this->height = $height;
    }
    public function setWidth($width)
    {
        $this->width = $width;
    }
    public function getWidth()
    {
        return $this->width;
    }
    public function setHeight($height)
    {
        $this->height = $height;
    }
    public function getHeight()
    {
        return $this->height;
    }
    public function getArea()
    {
        return $this->width * $this->height;
    }
    public function getPerimeter()
    {
        return 2 * ($this->width + $this->height);
    }
    public function display()
    {
        echo "Width: " . $this->width . "\n";
        echo "Height: " . $this->height . "\n";
        echo "Area: " . $this->getArea() . "\n";
        echo "Perimeter: " . $this->getPerimeter() . "\n";
    }
}
$rectangle = new Rectangle(10, 5);
$rectangle->display();

$rectangle->setWidth(20);
$rectangle->setHeight(10);
$rectangle->display();
