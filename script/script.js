window.addEventListener('load', () => {
  document.getElementById('loading').style.display = 'none';

  const days = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9'),
    document.getElementById('10'),
    document.getElementById('11'),
    document.getElementById('12'),
    document.getElementById('13'),
    document.getElementById('14'),
    document.getElementById('15'),
    document.getElementById('16'),
    document.getElementById('17'),
    document.getElementById('18'),
    document.getElementById('19'),
    document.getElementById('20'),
    document.getElementById('21'),
    document.getElementById('22'),
    document.getElementById('23'),
    document.getElementById('24')
  ];
  const imageBox = document.getElementById('imageBox');
  const wrapper = document.getElementById('wrapper');
  let pic = document.getElementById('pic');
  let x = document.getElementById('close');

  for (let i = 0; i < 24; i++) {
    days[i].style.backgroundColor = '#ededed';
    days[i].style.color = '#a17f1a';

    days[i].addEventListener('click', () => {
        pic.setAttribute("src", "./oliver/" + (i+1) + ".png");

        imageBox.style.display = 'flex';
        wrapper.style.display = 'none';

    });
  }

  x.addEventListener('click', () => {
    imageBox.style.display = 'none';
    wrapper.style.display = 'block';
  });
});
