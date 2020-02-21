let divs = document.getElementsByTagName("div");

for (let i of divs) {
  i.innerHTML = i.innerHTML.replace(/let /g, '<span class="keyword">let </span>');
  i.innerHTML = i.innerHTML.replace(/if /g, '<span class="keyword">if </span>');
  i.innerHTML = i.innerHTML.replace(/ new/g, '<span class="keyword"> new</span>');
  i.innerHTML = i.innerHTML.replace(/ Game/g, '<span class="object"> Game</span>');
  i.innerHTML = i.innerHTML.replace(/ Scene/g, '<span class="object"> Scene</span>');
  i.innerHTML = i.innerHTML.replace(/ Entity/g, '<span class="object"> Entity</span>');
  i.innerHTML = i.innerHTML.replace(/ Sprite/g, '<span class="object"> Sprite</span>');
  i.innerHTML = i.innerHTML.replace(/ Keyboard/g, '<span class="object"> Keyboard</span>');
  i.innerHTML = i.innerHTML.replace(/ Bounds/g, '<span class="object"> Bounds</span>');
  i.innerHTML = i.innerHTML.replace(/ Textual/g, '<span class="object"> Textual</span>');
  i.innerHTML = i.innerHTML.replace(/ Vector/g, '<span class="object"> Vector</span>');
  i.innerHTML = i.innerHTML.replace(/ D2PX/g, '<span class="object"> D2PX</span>');
  i.innerHTML = i.innerHTML.replace(/{/g, '<span class="symbol">{</span>');
  i.innerHTML = i.innerHTML.replace(/}/g, '<span class="symbol">}</span>');
  i.innerHTML = i.innerHTML.replace(/\(/g, '<span class="symbol">(</span>');
  i.innerHTML = i.innerHTML.replace(/\)/g, '<span class="symbol">)</span>');
  i.innerHTML = i.innerHTML.replace(/\[/g, '<span class="symbol">[</span>');
  i.innerHTML = i.innerHTML.replace(/\]/g, '<span class="symbol">]</span>');
}
