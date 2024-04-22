const bar = document.getElementById('bar_chart');
const doughnut = document.getElementById('doughnut_chart');
const line = document.getElementById('line_chart');

const config = {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [600, 200, 350, 170, 420, 250, 120, 420, 200, 550, 420, 180],
        backgroundColor: '#004A93'
      },
      {
        label: 'Order',
        data: [400, 400, 480, 100, 520, 400, 250, 320, 320, 680, 350, 350],
        backgroundColor: '#E7B82A'
      }
    ]
  },
  options: {
    plugins: {
      responsive: true,
      scales: {
        y: {
          stacked: true
        }
      }
    }
  }
}

const lineConfig = {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'New  Customers  63% which is 12563  visitors',
        data: [16, 45, 3, 61, 28, 50, 7, 36, 68, 22, 59, 12],
        borderColor: '#33A142'
      },
      {
        label: 'Frequent Customers  18% which is 12563  visitors',
        data: [55, 9, 34, 66, 18, 41, 63, 27, 4, 52, 10, 69],
        borderColor: '#004A93',
        cubicInterpolationMode: 'monotone'
      },
      {
        label: 'Idle Users 14 % which is 1256 visitors ',
        data: [32, 57, 14, 48, 2, 67, 39, 20, 60, 5, 43, 25],
        borderColor: '#E7B82A',
        cubicInterpolationMode: 'monotone'
      },
      {
        label: 'Cart Abandoners  14% which is 12563  visitors',
        data: [37, 64, 11, 49, 30, 62, 17, 58, 31, 6, 53, 23],
        borderColor: '#DA476A',
        cubicInterpolationMode: 'monotone'
      }
    ]
  },
  options: {
    plugins: {
      responsive: true,
      legend: {
        position: 'right'
      }
    }
  }
}

const doughNutConfig = {
  type: 'doughnut',
  data: {
    labels: ['Total Sales', 'Income', 'Orders Recieved', 'Service Requests', 'Orders canceled', 'Orders Dispatched'],
    datasets: [
      {
        label: 'Revenue',
        data: [20, 15, 13, 12, 40],
        backgroundColor: ['#0275C5', '#CD0508', '#33A142', '#004A93', '#E7B82A']
      }
    ]
  },
  options: {
    plugins: {
      responsive: true,
      legend: {
        position: 'bottom'
      }
    },
    radius: '50%'
  }
}

function animate() {
  gsap.fromTo('.chart_stagger', {
    opacity: 0,
    y: '-2rem'
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    delay: 1
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const barChart = new Chart(bar.getContext('2d'), config);
  const doughnut_chart = new Chart(doughnut.getContext('2d'), doughNutConfig);
  const line_chart = new Chart(line.getContext('2d'), lineConfig);
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
  }

  animate();
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.remove('w-100');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.add('w-100');
  }
});