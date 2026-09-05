//dropdown (selectleri) bulmak
const regionFilter = document.getElementById('filter-region');
const difficultyFilter = document.getElementById('filter-difficulty');
const daysFilter = document.getElementById('filter-days');

// tüm tur kartları
const cards = document.querySelectorAll('.destination-card');

// gün sayısını kategoriye çevir
function getDaysCategory(days){
    const num = parseInt(days);
    if (num <= 5) return 'short';
    if (num <= 10) return 'medium';
    return 'long';
}

// filtreleme 
function applyFilters() {
    const selectedRegion = regionFilter.value;
    const selectedDifficulty = difficultyFilter.value;
    const selectedDays = daysFilter.value;

    cards.forEach(function (card) {
        //kartı değil kartı saran sutün gizlenecek
        const column = card.closest('.col-md-4');

        const cardRegion = card.dataset.region;
        const cardDifficulty = card.dataset.difficulty;
        const cardDays = getDaysCategory(card.dataset.days);

        const regionMatch = selectedRegion === 'all' || selectedRegion === cardRegion;
        const difficultyMatch = selectedDifficulty === 'all' || selectedDifficulty === cardDifficulty;
        const daysMatch = selectedDays === 'all' || selectedDays === cardDays;    

        //üçüde uyuyorsa göster, uymuyorsa gizle
        if (regionMatch && difficultyMatch && daysMatch) {
                column.style.display = '';
            } else {
                column.style.display = 'none';
            }
    });
}

/* dropdown değişince filtreleri çalıştır */
regionFilter.addEventListener('change', applyFilters);
difficultyFilter.addEventListener('change', applyFilters);
daysFilter.addEventListener('change', applyFilters);