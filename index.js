function changeLanguage() {
    const selectElement = document.getElementById('language-select');
    const englishContent = document.getElementById('english-content');
    const arabicContent = document.getElementById('arabic-content');
    const japaneseContent = document.getElementById('japanese-content');
  
    const selectedLanguage = selectElement.value;
  
    if (selectedLanguage === 'en') {
      englishContent.style.display = 'block';
      arabicContent.style.display = 'none';
      japaneseContent.style.display = 'none';
    } else if (selectedLanguage === 'ar') {
      englishContent.style.display = 'none';
      arabicContent.style.display = 'block';
      japaneseContent.style.display = 'none';
    } else {
        englishContent.style.display = 'none';
        arabicContent.style.display = 'none';
        japaneseContent.style.display = 'block';
    }
  }