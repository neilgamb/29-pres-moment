function init() {

//  Example One
//  Basic Instruction
    let dateOne = 'Thu May 18 2017 12:27:23 GMT+0000 (UTC)';
    let dateOneFormat = 'LL';

    let parentOne = document.querySelector('main section.examples ul');

    let elOne = document.createElement('li');
    elOne.textContent = "Example 1";

    let dateOneString = document.createElement('p');
    dateOneString.textContent = "String Format: " + dateOne;

    let dateOneMoment = document.createElement('p');

    // Moment Code:
    dateOneMoment.textContent = "Moment Format: " + moment(dateOne).format(dateOneFormat);

    parentOne.appendChild(elOne);
    elOne.appendChild(dateOneString);
    elOne.appendChild(dateOneMoment);

//  Example Two
//  Date Calcuations
    let dateTwo = '2016-12-31';
    let dateTwoFormat = 'LL';

    let parentTwo = document.querySelector('main section.examples ul');

    let elTwo = document.createElement('li');
    elTwo.textContent = "Example 2";

    let dateTwoString = document.createElement('p');
    dateTwoString.textContent = "String Format: " + dateTwo;

    let dateTwoMoment = document.createElement('p');

    // Moment Code:
    // dateTwoMoment.textContent = 
    //     "Moment Format: " + moment(dateTwo)
    //             .add(2, 'weeks')  // or subtract 
    //             .format(dateTwoFormat);

    // dateTwoMoment.textContent = 
    //     "Moment Format: " + moment(dateTwo)
    //             .add(1, 'year')
    //             .add(1, 'days')
    //             .format(dateTwoFormat);

    // ^ Same as:

        dateTwoMoment.textContent = 
        "Moment Format: " + moment(dateTwo)
                .add({day: 1, months: 6})
                .format(dateTwoFormat);

    parentTwo.appendChild(elTwo);
    elTwo.appendChild(dateTwoString);
    elTwo.appendChild(dateTwoMoment);

//  Example Three
//  Relative Time + Humanize
    let start = '2017-12-31';
    let end = '2018-04-02';

    let parentThree = document.querySelector('main section.examples ul');

    let elThree = document.createElement('li');
    elThree.textContent = "Example 3";

    let dateThreeString = document.createElement('p');
    dateThreeString.textContent = "String Format: " + start;

    let dateThreeMoment = document.createElement('p');

    // Moment Code:
    // dateThreeMoment.textContent = "Moment Format: " + moment(start).fromNow();

    dateThreeMoment.textContent = "Moment Format: " + moment(end).diff(moment(start)); // defaults in mms
    
    // Humanize:
    let result = moment(end).diff(moment(start));
    let humanize = moment.duration(result).humanize();
    // dateThreeMoment.textContent = "Moment Format: " + humanize; // 'human' format

    let asHours = moment.duration(result).as('hours');
    dateThreeMoment.textContent = "Moment Format: " + asHours; // 'human' format


    parentThree.appendChild(elThree);
    elThree.appendChild(dateThreeString);
    elThree.appendChild(dateThreeMoment);

}



window.addEventListener('load', init);

