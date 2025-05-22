 <!-- Chart Scripts -->
  <script>
    // Initialize all charts when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
      // Bookings Trend Chart
      const bookingsCtx = document.getElementById('bookingsChart').getContext('2d');
      new Chart(bookingsCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Bookings',
            data: [120, 145, 178, 210, 195, 230, 280],
            backgroundColor: 'rgba(79, 195, 247, 0.2)',
            borderColor: '#4fc3f7',
            borderWidth: 2,
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { display: false }
            },
            x: { 
              grid: { display: false }
            }
          }
        }
      });

      // Revenue Breakdown Chart
      const revenueCtx = document.getElementById('revenueChart').getContext('2d');
      new Chart(revenueCtx, {
        type: 'bar',
        data: {
          labels: ['Standard', 'Premium', 'VIP', 'Airport', 'Long Distance'],
          datasets: [{
            label: 'Revenue (LKR)',
            data: [450000, 320000, 280000, 150000, 50000],
            backgroundColor: [
              'rgba(79, 195, 247, 0.7)',
              'rgba(76, 175, 80, 0.7)',
              'rgba(156, 39, 176, 0.7)',
              'rgba(255, 152, 0, 0.7)',
              'rgba(244, 67, 54, 0.7)'
            ],
            borderColor: [
              '#4fc3f7',
              '#4caf50',
              '#9c27b0',
              '#ff9800',
              '#f44336'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: { display: false }
            },
            x: { 
              grid: { display: false }
            }
          }
        }
      });

      // Driver Performance Chart
      const driverCtx = document.getElementById('driverChart').getContext('2d');
      new Chart(driverCtx, {
        type: 'radar',
        data: {
          labels: ['Completed Jobs', 'Earnings', 'Customer Rating', 'Response Time', 'Availability'],
          datasets: [
            {
              label: 'Top Driver',
              data: [48, 95, 98, 90, 85],
              backgroundColor: 'rgba(79, 195, 247, 0.2)',
              borderColor: '#4fc3f7',
              borderWidth: 2,
              pointBackgroundColor: '#4fc3f7'
            },
            {
              label: 'Average',
              data: [32, 65, 82, 70, 75],
              backgroundColor: 'rgba(76, 175, 80, 0.2)',
              borderColor: '#4caf50',
              borderWidth: 2,
              pointBackgroundColor: '#4caf50'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top'
            }
          },
          scales: {
            r: {
              angleLines: { display: true },
              suggestedMin: 0,
              suggestedMax: 100
            }
          }
        }
      });

      // Job Status Chart
      const statusCtx = document.getElementById('statusChart').getContext('2d');
      new Chart(statusCtx, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'In Progress', 'Canceled', 'Scheduled'],
          datasets: [{
            data: [65, 15, 10, 10],
            backgroundColor: [
              '#4caf50',
              '#2196f3',
              '#f44336',
              '#ff9800'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          },
          cutout: '70%'
        }
      });

      // Menu active state management
      document.querySelectorAll('.sidebar li').forEach(item => {
        item.addEventListener('click', function() {
          // Remove active class from all items
          document.querySelectorAll('.sidebar li').forEach(i => i.classList.remove('active'));
          
          // Add active class to clicked item
          this.classList.add('active');
          
          // Close other submenus
          if(this.querySelector('.submenu')) {
            document.querySelectorAll('.submenu').forEach(menu => {
              if(menu !== this.querySelector('.submenu')) {
                menu.style.display = 'none';
              }
            });
          }
        });
      });

      // Simulate loading data
      setTimeout(() => {
        document.querySelector('.notification-badge').textContent = '5';
      }, 2000);
    });

    // Simulate fetching data from API
    async function fetchDashboardData() {
      try {
        // In a real app, you would fetch from your API endpoint
        // const response = await fetch('/api/dashboard');
        // const data = await response.json();
        
        // For demo purposes, we'll use mock data
        const mockData = {
          bookings: 1248,
          drivers: 86,
          agencies: 24,
          revenue: 1200000,
          pendingJobs: 18
        };
        
        return mockData;
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        return null;
      }
    }

    // Initialize with real data
    fetchDashboardData().then(data => {
      if(data) {
        console.log('Dashboard data loaded:', data);
        // You would update your UI elements with this data
      }
    });
  </script>