  let a=parseFloat(prompt("Podaj liczbę"))
  let b=parseFloat(prompt("Podaj drugą liczbę"))
  let c=parseInt(prompt("Wybierz działanie:  1 - dodawanie  2 - odejmowanie  3 - mnożenie  4 - dzielenie"))

  switch (c){
    case 1:
    document.write(a+b)
    break
    case 2:
    document.write(a-b)
    break
    case 3:
    document.write(a*b)
    break
    case 4:
    document.write(a/b)
    break
  }