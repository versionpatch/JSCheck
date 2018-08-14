var isBold = false;
var isItalic = false;
var isUnderlined = false;


document.querySelector("p").style.fontSize="20px";

var boldBtn = document.querySelector("#bold");
var itBtn = document.querySelector("#italic");
var ulBtn = document.querySelector("#underline");



function ActiveBtn(btn)
{
    btn.style.backgroundColor = "#cccccc";
    btn.style.color = "#222222";
}
function DefaultBtn(btn)
{
    btn.style.backgroundColor = "#222222";
    btn.style.color="#ffffff";
}

function Bold()
{
    if (!isBold)
    {
        document.querySelector("p").style.fontWeight="bold";
        isBold = true;
        ActiveBtn(boldBtn);
    }
    else
    {
        document.querySelector("p").style.fontWeight="";
        isBold = false;
        DefaultBtn(boldBtn);
    }
}
function Italic()
{
    if (!isItalic)
    {
        document.querySelector("p").style.fontStyle = "italic";
        isItalic = true;
        ActiveBtn(itBtn);
    }
    else
    {
        document.querySelector("p").style.fontStyle = "";
        isItalic = false;
        DefaultBtn(itBtn);
    }
}
function Underline()
{
    if (!isUnderlined)
    {
        document.querySelector("p").style.textDecoration="underline";
        isUnderlined = true;
        ActiveBtn(ulBtn);
    }
    else
    {
        document.querySelector("p").style.textDecoration="";
        isUnderlined = false;
        DefaultBtn(ulBtn);
    }
}

function ChangeFont(font)
{
    document.querySelector("p").style.fontFamily= font;
}

function ChangeSize(size)
{
    document.querySelector("p").style.fontSize=size;
}