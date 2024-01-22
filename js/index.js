"use strict";var searchedItemSize,devil=document.querySelector(".devil"),startGameButton=document.querySelector(".play"),resultDisplay=document.querySelector(".result-display"),resultText=document.querySelector(".result-display__text"),newGameButton=document.querySelector(".result-display__button"),book=document.querySelector(".book"),bookStar=document.querySelector(".book__star"),bookEllipse=document.querySelector(".book__ellipse"),questionsBlock=document.querySelector(".questions"),searchedItem=document.querySelector(".pento"),pento=document.querySelectorAll(".questions__pento"),width=110;function checkWidthIncreaseFactor(){var e=getSizeOfDisplay("height");return getSizeOfDisplay("width")<=560?.8:e>=1e3?3.2:e<1e3&&e>=850?2.7:e<850&&e>=780?2.4:e<780&&e>=702?2.1:e<702&&e>=590?1.8:e<590&&e>=525?1.5:e<525&&e>=450?1.2:e<450?.8:void 0}function delay(e){return new Promise((function(t){return setTimeout(t,e)}))}function getSizeOfDisplay(e){return document.documentElement.getBoundingClientRect()[e]}function getCenterOfDisplay(e){return getSizeOfDisplay(e)/2}function getSizeOfDevil(e){return devil.getBoundingClientRect()[e]}function getSizeOfBook(e){return book.getBoundingClientRect()[e]}function positioningBook(){book.style.left=getCenterOfDisplay("width")-getSizeOfBook("width")/2+"px",book.style.bottom=getCenterOfDisplay("height")-getSizeOfBook("height")/2+"px"}function startGame(){startGameButton.classList.add("play_active"),book.classList.add("book_red"),bookStar.classList.add("book__star_red"),bookEllipse.classList.add("book__ellipse_red"),new Audio("call-devil.mp3").play(),new Audio("shake-book.mp3").play()}function generateSearchedItemNum(e,t){var o=Math.floor(getSizeOfDisplay([t])-e);return Math.floor(Math.random()*(o-e+1)+e)}positioningBook(),window.addEventListener("resize",(function(){searchedItemSize=searchedItem.getBoundingClientRect().width,positioningBook()}));var mainThemeSound=new Audio("main-sound.mp3");function showDevil(){delay(8e3).then((function(){searchedItem.style.display="inline-block",searchedItemSize=searchedItem.getBoundingClientRect().width,searchedItem.style.left=generateSearchedItemNum(searchedItemSize,"width"),searchedItem.style.bottom=generateSearchedItemNum(searchedItemSize,"height"),book.classList.remove("book_red"),book.classList.add("book_hide"),devil.classList.add("devil_show"),devil.style.left=getCenterOfDisplay("width")-getSizeOfDevil("width")/2+"px",devil.style.bottom=getCenterOfDisplay("height")-getSizeOfDevil("height")/2+"px",mainThemeSound.play(),setInterval((function(){searchedItem.style.left=generateSearchedItemNum(searchedItemSize,"width"),searchedItem.style.bottom=generateSearchedItemNum(searchedItemSize,"height")}),800)}))}var timerId,count=0;function scaleDevil(){delay(9001).then((function(){timerId=setInterval((function(){var e=checkWidthIncreaseFactor();width+=e,devil.style.width=width+"px",devil.style.left=getCenterOfDisplay("width")-width/2+"px",devil.style.bottom=getCenterOfDisplay("height")-getSizeOfDevil("height")/2+"px"}),200)}))}function showResultDisplay(e,t,o){resultDisplay.classList.add(t),devil.classList.remove("devil_show"),resultText.textContent=e,clearInterval(timerId),newGameButton.classList.add(o)}searchedItem.addEventListener("click",(function(e){count<10&&(4===count&&delay(1e3).then((function(){questionsBlock.classList.add("questions__pento_shake")})),new Audio("finded-sound.mp3").play(),pento[count].classList.add("questions__pento_found"),++count),9===count&&(showResultDisplay("YOU SURVIVED","result-display_win","result-display__button_win"),mainThemeSound.pause(),searchedItem.remove(),questionsBlock.classList.remove("questions__pento_shake"),delay(1e3).then((function(){new Audio("win-sound.mp3").play()})),clearInterval(timerIdEnd))}));var timerIdEnd,timer=0;function loadGame(){startGame(),showDevil(),scaleDevil(),timerIdEnd=setInterval((function(){57===++timer&&(showResultDisplay("YOU DIED","result-display_loose","result-display__button_loose"),searchedItem.remove(),questionsBlock.classList.remove("questions__pento_shake"))}),1e3),startGameButton.removeEventListener("click",loadGame)}startGameButton.addEventListener("click",loadGame),newGameButton.addEventListener("click",(function(){location.reload()}));