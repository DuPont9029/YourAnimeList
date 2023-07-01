function handleFileInput(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var xmlString = e.target.result;
        var x2js = new X2JS();
        var jsonObject = {
            anime: x2js.xml_str2json(xmlString).myanimelist.anime,
            myinfo: x2js.xml_str2json(xmlString).myanimelist.myinfo
        };

        var tableBody = document.getElementById('anime-list');

        tableBody.innerHTML = '';

        jsonObject.anime.forEach(function (anime, index) {
            var row = document.createElement('tr');

            var indexCell = document.createElement('td');
            indexCell.textContent = index + 1;
            row.appendChild(indexCell);

            var titleCell = document.createElement('td');
            titleCell.textContent = anime.series_title;
            row.appendChild(titleCell);

            var typeCell = document.createElement('td');
            typeCell.textContent = anime.series_type;
            row.appendChild(typeCell);

            var episodesCell = document.createElement('td');
            episodesCell.textContent = anime.series_episodes;
            row.appendChild(episodesCell);

            var scoreCell = document.createElement('td');
            scoreCell.textContent = anime.my_score;
            row.appendChild(scoreCell);

            var startDateCell = document.createElement('td');
            startDateCell.textContent = anime.my_start_date;
            row.appendChild(startDateCell);

            var finishDateCell = document.createElement('td');
            finishDateCell.textContent = anime.my_finish_date;
            row.appendChild(finishDateCell);

            tableBody.appendChild(row);
        });
    };

    reader.readAsText(file);
}