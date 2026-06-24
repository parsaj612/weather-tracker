
const historicalData = [{"date":"2021-06-01","max_temp":24.3,"min_temp":12.4},{"date":"2021-06-02","max_temp":21.1,"min_temp":11.5},{"date":"2021-06-03","max_temp":22.1,"min_temp":11.7},{"date":"2021-06-04","max_temp":22.3,"min_temp":11.1},{"date":"2021-06-05","max_temp":23.7,"min_temp":9.9},{"date":"2021-06-06","max_temp":20.7,"min_temp":10.2},{"date":"2021-06-07","max_temp":21.2,"min_temp":12.9},{"date":"2021-06-08","max_temp":21.9,"min_temp":11.9},{"date":"2021-06-09","max_temp":23.3,"min_temp":12.0},{"date":"2021-06-10","max_temp":21.0,"min_temp":9.7},{"date":"2021-06-11","max_temp":19.2,"min_temp":10.2},{"date":"2021-06-12","max_temp":23.4,"min_temp":10.9},{"date":"2021-06-13","max_temp":18.9,"min_temp":10.7},{"date":"2021-06-14","max_temp":23.8,"min_temp":9.2},{"date":"2022-06-01","max_temp":19.6,"min_temp":12.7},{"date":"2022-06-02","max_temp":19.9,"min_temp":11.2},{"date":"2022-06-03","max_temp":21.8,"min_temp":12.0},{"date":"2022-06-04","max_temp":22.0,"min_temp":9.8},{"date":"2022-06-05","max_temp":19.8,"min_temp":14.0},{"date":"2022-06-06","max_temp":20.8,"min_temp":10.1},{"date":"2022-06-07","max_temp":21.7,"min_temp":10.9},{"date":"2022-06-08","max_temp":22.7,"min_temp":12.0},{"date":"2022-06-09","max_temp":22.6,"min_temp":12.5},{"date":"2022-06-10","max_temp":23.2,"min_temp":10.4},{"date":"2022-06-11","max_temp":20.4,"min_temp":11.3},{"date":"2022-06-12","max_temp":22.3,"min_temp":11.6},{"date":"2022-06-13","max_temp":18.7,"min_temp":12.0},{"date":"2022-06-14","max_temp":23.8,"min_temp":12.6},{"date":"2023-06-01","max_temp":19.6,"min_temp":9.5},{"date":"2023-06-02","max_temp":19.3,"min_temp":10.5},{"date":"2023-06-03","max_temp":23.3,"min_temp":12.9},{"date":"2023-06-04","max_temp":19.5,"min_temp":10.7},{"date":"2023-06-05","max_temp":23.2,"min_temp":11.6},{"date":"2023-06-06","max_temp":21.1,"min_temp":10.3},{"date":"2023-06-07","max_temp":22.8,"min_temp":12.6},{"date":"2023-06-08","max_temp":23.0,"min_temp":9.9},{"date":"2023-06-09","max_temp":21.6,"min_temp":12.2},{"date":"2023-06-10","max_temp":21.2,"min_temp":9.9},{"date":"2023-06-11","max_temp":22.2,"min_temp":12.8},{"date":"2023-06-12","max_temp":24.5,"min_temp":9.8},{"date":"2023-06-13","max_temp":22.9,"min_temp":12.0},{"date":"2023-06-14","max_temp":22.3,"min_temp":11.1},{"date":"2024-06-01","max_temp":21.4,"min_temp":11.3},{"date":"2024-06-02","max_temp":21.7,"min_temp":12.5},{"date":"2024-06-03","max_temp":24.5,"min_temp":10.2},{"date":"2024-06-04","max_temp":22.1,"min_temp":12.7},{"date":"2024-06-05","max_temp":21.8,"min_temp":9.6},{"date":"2024-06-06","max_temp":22.2,"min_temp":9.9},{"date":"2024-06-07","max_temp":17.7,"min_temp":8.9},{"date":"2024-06-08","max_temp":20.1,"min_temp":11.8},{"date":"2024-06-09","max_temp":24.5,"min_temp":10.3},{"date":"2024-06-10","max_temp":21.0,"min_temp":9.8},{"date":"2024-06-11","max_temp":19.2,"min_temp":10.9},{"date":"2024-06-12","max_temp":19.9,"min_temp":11.0},{"date":"2024-06-13","max_temp":21.7,"min_temp":12.0},{"date":"2024-06-14","max_temp":24.8,"min_temp":12.1},{"date":"2025-06-01","max_temp":21.2,"min_temp":9.6},{"date":"2025-06-02","max_temp":18.3,"min_temp":8.7},{"date":"2025-06-03","max_temp":17.3,"min_temp":12.4},{"date":"2025-06-04","max_temp":20.3,"min_temp":11.8},{"date":"2025-06-05","max_temp":20.2,"min_temp":13.3},{"date":"2025-06-06","max_temp":21.4,"min_temp":8.9},{"date":"2025-06-07","max_temp":23.2,"min_temp":8.2},{"date":"2025-06-08","max_temp":21.1,"min_temp":9.7},{"date":"2025-06-09","max_temp":21.5,"min_temp":10.0},{"date":"2025-06-10","max_temp":20.9,"min_temp":10.7},{"date":"2025-06-11","max_temp":22.1,"min_temp":11.2},{"date":"2025-06-12","max_temp":23.1,"min_temp":11.0},{"date":"2025-06-13","max_temp":19.1,"min_temp":11.7},{"date":"2025-06-14","max_temp":20.8,"min_temp":9.4}];
const forecastData = [{"date":"2026-06-24","max_temp":21.3,"min_temp":12.1},{"date":"2026-06-25","max_temp":19.6,"min_temp":10.5},{"date":"2026-06-26","max_temp":21.0,"min_temp":11.5},{"date":"2026-06-27","max_temp":20.3,"min_temp":9.2},{"date":"2026-06-28","max_temp":20.8,"min_temp":11.2},{"date":"2026-06-29","max_temp":22.6,"min_temp":12.1},{"date":"2026-06-30","max_temp":22.1,"min_temp":9.7}];

document.addEventListener("DOMContentLoaded", function() {
    const histMaxes = historicalData.map(d => d.max_temp);
    const histMins = historicalData.map(d => d.min_temp);
    const foreMaxes = forecastData.map(d => d.max_temp);
    const foreMins = forecastData.map(d => d.min_temp);

    const avg = arr => (arr.reduce((a,b) => a+b, 0) / arr.length).toFixed(1);

    document.getElementById('hist-high-val').innerHTML = `${avg(histMaxes)}<span>°C</span>`;
    document.getElementById('hist-low-val').innerHTML = `${avg(histMins)}<span>°C</span>`;
    document.getElementById('fore-high-val').innerHTML = `${Math.max(...foreMaxes).toFixed(1)}<span>°C</span>`;
    document.getElementById('fore-low-val').innerHTML = `${Math.min(...foreMins).toFixed(1)}<span>°C</span>`;

    const dayMap = {};
    historicalData.forEach(item => {
        const day = new Date(item.date).getDate();
        if(!dayMap[day]) dayMap[day] = { max: [], min: [] };
        dayMap[day].max.push(item.max_temp);
        dayMap[day].min.push(item.min_temp);
    });

    const sortedDays = Object.keys(dayMap).sort((a,b) => a-b);
    const profileLabels = sortedDays.map(d => `June ${d}`);
    const profileMax = sortedDays.map(d => avg(dayMap[d].max));
    const profileMin = sortedDays.map(d => avg(dayMap[d].min));

    const tableBody = document.querySelector("#forecast-table tbody");
    forecastData.forEach(row => {
        const tr = document.createElement('tr');
        const delta = (row.max_temp - row.min_temp).toFixed(1);
        tr.innerHTML = `
            <td><strong>${row.date}</strong></td>
            <td><span class="badge badge-max">${row.max_temp}°C</span></td>
            <td><span class="badge badge-min">${row.min_temp}°C</span></td>
            <td>${delta}°C</td>
        `;
        tableBody.appendChild(tr);
    });

    new Chart(document.getElementById('forecastChart'), {
        type: 'line',
        data: {
            labels: forecastData.map(d => d.date),
            datasets: [
                {
                    label: 'Max Temp (°C)',
                    data: foreMaxes,
                    borderColor: '#ea4335',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.35,
                    pointRadius: 4
                },
                {
                    label: 'Min Temp (°C)',
                    data: foreMins,
                    borderColor: '#1a73e8',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.35,
                    pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: { grid: { color: '#f0f0f0' } },
                x: { grid: { display: false } }
            }
        }
    });

    new Chart(document.getElementById('historicalChart'), {
        type: 'line',
        data: {
            labels: profileLabels,
            datasets: [
                {
                    label: '5-Yr Avg High',
                    data: profileMax,
                    borderColor: '#f28b82',
                    backgroundColor: 'transparent',
                    borderWidth: 2.5,
                    borderDash: [5, 5],
                    tension: 0.2
                },
                {
                    label: '5-Yr Avg Low',
                    data: profileMin,
                    borderColor: '#8ab4f8',
                    backgroundColor: 'transparent',
                    borderWidth: 2.5,
                    borderDash: [5, 5],
                    tension: 0.2
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: { grid: { color: '#f0f0f0' } },
                x: { grid: { display: false } }
            }
        }
    });
});
