import React from 'react';
class phoneCountryInput extends React.Component {
  render() {
    const { type, onInputChange } = this.props;

    if (type === 'phoneSignup') {
      return (
        <>
          <div className='dynamicInputGroup'>
            <select
              className='dInput dInput1'
              name='countryCode'
              onChange={onInputChange}
            >
              <option value='' hidden>
                Select Country
              </option>
              <option value='0093'>Afghanistan (+93)</option>
              <option value='00355'>Albania (+355)</option>
              <option value='00213'>Algeria (+213)</option>
              <option value='001684'>American Samoa (+1684)</option>
              <option value='00376'>Andorra (+376)</option>
              <option value='00244'>Angola (+244)</option>
              <option value='001264'>Anguilla (+1264)</option>
              <option value='00672'>Antartica (+672)</option>
              <option value='001268'>Antigua &amp; Barbuda (+1268)</option>
              <option value='0054'>Argentina (+54)</option>
              <option value='00374'>Armenia (+374)</option>
              <option value='00297'>Aruba (+297)</option>
              <option value='0061'>Australia (+61)</option>
              <option value='0043'>Austria (+43)</option>
              <option value='00994'>Azerbaijan (+994)</option>
              <option value='001242'>Bahamas (+1242)</option>
              <option value='00973'>Bahrain (+973)</option>
              <option value='00880'>Bangladesh (+880)</option>
              <option value='001246'>Barbados (+1246)</option>
              <option value='00375'>Belarus (+375)</option>
              <option value='0032'>Belgium (+32)</option>
              <option value='00501'>Belize (+501)</option>
              <option value='00229'>Benin (+229)</option>
              <option value='001441'>Bermuda (+1441)</option>
              <option value='00975'>Bhutan (+975)</option>
              <option value='00591'>Bolivia (+591)</option>
              <option value='00387'>Bosnia &amp; Herzegovina (+387)</option>
              <option value='00267'>Botswana (+267)</option>
              <option value='0055'>Brazil (+55)</option>
              <option value='00246'>
                British India Ocean Terrirory (+246)
              </option>
              <option value='001284'>British Virgin Islands (+1284)</option>
              <option value='00673'>Brunei (+673)</option>
              <option value='00359'>Bulgaria (+359)</option>
              <option value='00226'>Burkina Faso (+226)</option>
              <option value='00257'>Burundi (+257)</option>
              <option value='00855'>Cambodia (+855)</option>
              <option value='00237'>Cameroon (+237)</option>
              <option value='001'>Canada (+1)</option>
              <option value='00238'>Cape Verde Islands (+238)</option>
              <option value='001345'>Cayman Islands (+1345)</option>
              <option value='00236'>Central African Republic (+236)</option>
              <option value='00235'>Chad (+235)</option>
              <option value='056'>Chile (+56)</option>
              <option value='0086'>China (+86)</option>
              <option value='0061'>Christmas Island (+61)</option>
              <option value='0061'>Cocos Islands (+61)</option>
              <option value='0057'>Colombia (+57)</option>
              <option value='00269'>Comoros (+269)</option>
              <option value='00682'>Cook Islands (+682)</option>
              <option value='00506'>Costa Rica (+506)</option>
              <option value='00385'>Croatia (+385)</option>
              <option value='0053'>Cuba (+53)</option>
              <option value='00599'>Curacao (+599)</option>
              <option value='0090'>Cyprus - North (+90)</option>
              <option value='00357'>Cyprus - South (+357)</option>
              <option value='00420'>Czech Republic (+420)</option>
              <option value='00243'>Democratic Republic of Congo (+243)</option>
              <option value='0045'>Denmark (+45)</option>
              <option value='00253'>Djibouti (+253)</option>
              <option value='001809'>Dominica (+1809)</option>
              <option value='001809'>Dominican Republic (+1809)</option>
              <option value='00670'>East Timor (+670)</option>
              <option value='00593'>Ecuador (+593)</option>
              <option value='0020'>Egypt (+20)</option>
              <option value='00503'>El Salvador (+503)</option>
              <option value='00240'>Equatorial Guinea (+240)</option>
              <option value='00291'>Eritrea (+291)</option>
              <option value='00372'>Estonia (+372)</option>
              <option value='00251'>Ethiopia (+251)</option>
              <option value='00500'>Falkland Islands (+500)</option>
              <option value='00298'>Faroe Islands (+298)</option>
              <option value='00679'>Fiji (+679)</option>
              <option value='00358'>Finland (+358)</option>
              <option value='0033'>France (+33)</option>
              <option value='00594'>French Guiana (+594)</option>
              <option value='00689'>French Polynesia (+689)</option>
              <option value='00241'>Gabon (+241)</option>
              <option value='00220'>Gambia (+220)</option>
              <option value='007880'>Georgia (+7880)</option>
              <option value='0049'>Germany (+49)</option>
              <option value='00233'>Ghana (+233)</option>
              <option value='00350'>Gibraltar (+350)</option>
              <option value='0030'>Greece (+30)</option>
              <option value='00299'>Greenland (+299)</option>
              <option value='001473'>Grenada (+1473)</option>
              <option value='00590'>Guadeloupe (+590)</option>
              <option value='00671'>Guam (+671)</option>
              <option value='00502'>Guatemala (+502)</option>
              <option value='0044'>Guernsey (+44)</option>
              <option value='00224'>Guinea (+224)</option>
              <option value='00245'>Guinea-Bissau (+245)</option>
              <option value='00592'>Guyana (+592)</option>
              <option value='00509'>Haiti (+509)</option>
              <option value='00504'>Honduras (+504)</option>
              <option value='00852'>Hong Kong (+852)</option>
              <option value='0036'>Hungary (+36)</option>
              <option value='00354'>Iceland (+354)</option>
              <option value='0091'>India (+91)</option>
              <option value='0062'>Indonesia (+62)</option>
              <option value='0098'>Iran (+98)</option>
              <option value='00964'>Iraq (+964)</option>
              <option value='00353'>Ireland (+353)</option>
              <option value='0044'>Isle of Man (+44)</option>
              <option value='00972'>Israel (+972)</option>
              <option value='0039'>Italy (+39)</option>
              <option value='00225'>Ivory Coast (+225)</option>
              <option value='001876'>Jamaica (+1876)</option>
              <option value='0081'>Japan (+81)</option>
              <option value='0044'>Jersey (+44)</option>
              <option value='00962'>Jordan (+962)</option>
              <option value='007'>Kazakhstan (+7)</option>
              <option value='00254'>Kenya (+254)</option>
              <option value='00686'>Kiribati (+686)</option>
              <option value='00383'>Kosovo (+383)</option>
              <option value='00965'>Kuwait (+965)</option>
              <option value='00996'>Kyrgyzstan (+996)</option>
              <option value='00856'>Laos (+856)</option>
              <option value='00371'>Latvia (+371)</option>
              <option value='00961'>Lebanon (+961)</option>
              <option value='00266'>Lesotho (+266)</option>
              <option value='00231'>Liberia (+231)</option>
              <option value='00218'>Libya (+218)</option>
              <option value='00417'>Liechtenstein (+417)</option>
              <option value='00370'>Lithuania (+370)</option>
              <option value='00352'>Luxembourg (+352)</option>
              <option value='00853'>Macao (+853)</option>
              <option value='00389'>Macedonia (+389)</option>
              <option value='00261'>Madagascar (+261)</option>
              <option value='00265'>Malawi (+265)</option>
              <option value='0060'>Malaysia (+60)</option>
              <option value='00960'>Maldives (+960)</option>
              <option value='00223'>Mali (+223)</option>
              <option value='00356'>Malta (+356)</option>
              <option value='00692'>Marshall Islands (+692)</option>
              <option value='00596'>Martinique (+596)</option>
              <option value='00222'>Mauritania (+222)</option>
              <option value='00269'>Mayotte (+269)</option>
              <option value='0052'>Mexico (+52)</option>
              <option value='00691'>Micronesia (+691)</option>
              <option value='00373'>Moldova (+373)</option>
              <option value='00377'>Monaco (+377)</option>
              <option value='00976'>Mongolia (+976)</option>
              <option value='00382'>Montengro (+382)</option>
              <option value='001664'>Montserrat (+1664)</option>
              <option value='00212'>Morocco (+212)</option>
              <option value='00258'>Mozambique (+258)</option>
              <option value='0095'>Myanmar (+95)</option>
              <option value='00264'>Namibia (+264)</option>
              <option value='00674'>Nauru (+674)</option>
              <option value='00977'>Nepal (+977)</option>
              <option value='0031'>Netherlands (+31)</option>
              <option value='00599'>Netherlands Antilles (+599)</option>
              <option value='00687'>New Caledonia (+687)</option>
              <option value='0064'>New Zealand (+64)</option>
              <option value='00505'>Nicaragua (+505)</option>
              <option value='00227'>Niger (+227)</option>
              <option value='00234'>Nigeria (+234)</option>
              <option value='00683'>Niue (+683)</option>
              <option value='00850'>North Korea (+850)</option>
              <option value='00672'>Norfolk Islands (+672)</option>
              <option value='00670'>Northern Marianas (+670)</option>
              <option value='0047'>Norway (+47)</option>
              <option value='00968'>Oman (+968)</option>
              <option value='0092'>Pakistan (+92)</option>
              <option value='00680'>Palau (+680)</option>
              <option value='00970'>Palestine (+970)</option>
              <option value='00507'>Panama (+507)</option>
              <option value='00675'>Papua New Guinea (+675)</option>
              <option value='00595'>Paraguay (+595)</option>
              <option value='0051'>Peru (+51)</option>
              <option value='0063'>Philippines (+63)</option>
              <option value='0064'>Pitcairn (+64)</option>
              <option value='0048'>Poland (+48)</option>
              <option value='00351'>Portugal (+351)</option>
              <option value='001787'>Puerto Rico (+1787)</option>
              <option value='00974'>Qatar (+974)</option>
              <option value='00242'>Republic of the Congo (+242)</option>
              <option value='00262'>Reunion (+262)</option>
              <option value='0040'>Romania (+40)</option>
              <option value='007'>Russia (+7)</option>
              <option value='00250'>Rwanda (+250)</option>
              <option value='00590'>Saint Barthelemy (+590)</option>
              <option value='00290'>Saint Helena (+290)</option>
              <option value='001869'>Saint Kitts &amp; Nevis (+1869)</option>
              <option value='001758'>Saint Lucia (+1758)</option>
              <option value='00597'>Suriname (+597)</option>
              <option value='00590'>Saint Martin (+590)</option>
              <option value='00508'>
                Saint Saint Pierre and Miquelon (+508)
              </option>
              <option value='001784'>
                Saint Vincent and the Grenadines (+1784)
              </option>
              <option value='00685'>Samoa (+685)</option>
              <option value='00378'>San Marino (+378)</option>
              <option value='00239'>Sao Tome &amp; Principe (+239)</option>
              <option value='00966'>Saudi Arabia (+966)</option>
              <option value='00221'>Senegal (+221)</option>
              <option value='00381'>Serbia (+381)</option>
              <option value='00248'>Seychelles (+248)</option>
              <option value='00232'>Sierra Leone (+232)</option>
              <option value='0065'>Singapore (+65)</option>
              <option value='001721'>Sint Maarten (+1721)</option>
              <option value='00421'>Slovakia (+421)</option>
              <option value='00386'>Slovenia (+386)</option>
              <option value='00677'>Solomon Islands (+677)</option>
              <option value='00252'>Somalia (+252)</option>
              <option value='0027'>South Africa (+27)</option>
              <option value='0082'>South Korea (+82)</option>
              <option value='00211'>South Sudan (+211)</option>
              <option value='0034'>Spain (+34)</option>
              <option value='0094'>Sri Lanka (+94)</option>
              <option value='00249'>Sudan (+249)</option>
              <option value='00597'>Suriname (+597)</option>
              <option value='0047'>Svalbard &amp; Jan Mayen (+47)</option>
              <option value='00268'>Swaziland (+268)</option>
              <option value='0046'>Sweden (+46)</option>
              <option value='0041'>Switzerland (+41)</option>
              <option value='00963'>Syria (+963)</option>
              <option value='00886'>Taiwan (+886)</option>
              <option value='00992'>Tajikistan (+992)</option>
              <option value='00255'>Tanzania (+255)</option>
              <option value='0066'>Thailand (+66)</option>
              <option value='00228'>Togo (+228)</option>
              <option value='00676'>Tonga (+676)</option>
              <option value='001868'>Trinidad &amp; Tobago (+1868)</option>
              <option value='00216'>Tunisia (+216)</option>
              <option value='0090'>Turkey (+90)</option>
              <option value='00993'>Turkmenistan (+993)</option>
              <option value='001649'>Turks &amp; Caicos Islands (+1649)</option>
              <option value='00688'>Tuvalu (+688)</option>
              <option value='00256'>Uganda (+256)</option>
              <option value='00380'>Ukraine (+380)</option>
              <option value='00971'>United Arab Emirates (+971)</option>
              <option value='0044'>United Kingdom (+44)</option>
              <option value='001'>United States (+1)</option>
              <option value='00598'>Uruguay (+598)</option>
              <option value='00998'>Uzbekistan (+998)</option>
              <option value='00678'>Vanuatu (+678)</option>
              <option value='00379'>Vatican City (+379)</option>
              <option value='0058'>Venezuela (+58)</option>
              <option value='0084'>Vietnam (+84)</option>
              <option value='00681'>Wallis &amp; Futuna (+681)</option>
              <option value='00969'>Yemen (North)(+969)</option>
              <option value='00967'>Yemen (South)(+967)</option>
              <option value='00260'>Zambia (+260)</option>
              <option value='00263'>Zimbabwe (+263)</option>
            </select>
            <input
              className='dInput dInput2'
              placeholder='Phone Number'
              name='phoneNumber'
              onChange={onInputChange}
            />
          </div>
          <div className='msg-container'>
            <span>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </span>
          </div>
        </>
      );
    } else if (type === 'phoneCountry') {
      return (
        <div className='dynamicInputGroup'>
          <input
            className='dInput dInput1'
            placeholder='Phone Number'
            name='phoneNumber'
            onChange={onInputChange}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={onInputChange}
            className='dInput dInput2'
          />
        </div>
      );
    } else if (type === 'signupEmail') {
      return (
        <div className='dynamicInputGroup'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            onChange={onInputChange}
            className='dInput dInput1'
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            onChange={onInputChange}
            className='dInput dInput2'
          />
        </div>
      );
    } else if (type === 'loginEmail') {
      return (
        <div className='dynamicInputGroup'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={onInputChange}
            className='dInput dInput1'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={onInputChange}
            className='dInput dInput2'
          />
        </div>
      );
    }
  }
}
export default phoneCountryInput;
