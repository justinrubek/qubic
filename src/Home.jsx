import React from "react";

import common_style from "./css/common.css";

var text =
  "Bacon ipsum dolor amet burgdoggen pork chop tongue turkey hamburger jerky tenderloin cow short loin meatball turducken bacon. Ham hock flank pig kevin cow tail. Drumstick tenderloin ball tip pastrami capicola, boudin frankfurter ribeye. Boudin drumstick pastrami chicken salami turkey andouille swine. Fatback andouille cupim, kielbasa spare ribs pork brisket.  Leberkas pork belly t-bone ball tip chicken bacon venison pig shankle tri-tip. Capicola rump leberkas pork chop, salami beef spare ribs flank short loin tail. Pork loin short loin tongue rump meatloaf burgdoggen. Chuck shankle frankfurter kielbasa landjaeger ball tip.  Sirloin picanha cupim burgdoggen, venison pork loin shankle filet mignon. Kielbasa buffalo salami boudin chicken, pork belly pork chop bacon chuck porchetta ribeye alcatra ham hock pork loin. Sirloin capicola buffalo strip steak fatback salami. Beef ribs frankfurter ham hock, bresaola sirloin prosciutto tail flank shank t-bone pig leberkas salami spare ribs doner. Corned beef brisket beef, beef ribs short ribs pastrami ribeye venison sirloin pancetta bacon. Strip steak leberkas shoulder landjaeger cupim drumstick, kielbasa jowl short loin.  Flank shank tongue, shankle chuck spare ribs landjaeger bresaola biltong meatball chicken. Picanha pork chop kielbasa tenderloin. Beef ribs pork belly cow corned beef turkey doner, boudin ham hock. Jowl burgdoggen tongue prosciutto pastrami turkey.  Boudin meatloaf sausage, cow landjaeger turducken short ribs strip steak. Beef ribs sausage short ribs, burgdoggen strip steak t-bone kielbasa venison ground round chicken hamburger pastrami jerky porchetta cow. Cow buffalo pork loin tail leberkas pork short loin beef ribs brisket spare ribs porchetta sausage cupim alcatra picanha. Drumstick pork loin ground round, landjaeger spare ribs biltong burgdoggen jerky sirloin tongue short ribs. Turducken leberkas pork loin salami frankfurter pig bresaola kevin rump tongue flank t-bone.  Chuck pig sirloin turducken venison. Frankfurter spare ribs boudin tenderloin buffalo jerky. Pancetta pork belly ham hock, brisket cow biltong venison burgdoggen rump. Fatback bresaola tenderloin, bacon t-bone hamburger alcatra swine strip steak pork ham hock buffalo. Pork loin ball tip pancetta swine meatloaf cupim, prosciutto chuck strip steak buffalo picanha rump drumstick chicken. Picanha leberkas biltong tri-tip meatloaf shoulder t-bone pork chop short loin swine. Andouille corned beef drumstick burgdoggen tail fatback venison salami pork belly porchetta prosciutto.  Filet mignon pork chop strip steak beef jerky tongue. Ham meatloaf cupim shank. Beef ribs beef swine sausage alcatra. Capicola buffalo beef cupim pork chop beef ribs doner filet mignon cow jowl ribeye t-bone pork loin alcatra ham. Venison tail pork cow kielbasa sausage short ribs porchetta tongue rump.  Pork short loin sausage leberkas beef ribs tail boudin hamburger spare ribs. Bacon turducken short loin pig venison. Flank alcatra picanha t-bone turducken biltong. Ham burgdoggen pork chop shankle capicola, shoulder andouille. Pork kevin biltong, shoulder ground round tri-tip tenderloin cupim t-bone beef ribs capicola. Kevin ribeye drumstick doner cow tongue ham rump ground round jerky bacon.  Short ribs shank bacon porchetta spare ribs picanha sirloin ground round venison rump. Prosciutto ground round t-bone pastrami alcatra doner pig shoulder kevin hamburger fatback porchetta salami sausage. Beef ham salami, short ribs biltong andouille pork chop jowl tongue hamburger. Spare ribs jowl turducken, doner pig shank frankfurter ground round.  Bresaola rump strip steak, brisket kielbasa boudin turkey capicola leberkas. Meatloaf jowl pancetta turkey, porchetta sausage hamburger kielbasa buffalo biltong sirloin picanha bacon. Kevin shankle tongue hamburger tail meatloaf venison spare ribs ground round. Bresaola picanha biltong brisket pork chop. Shank hamburger pig porchetta andouille strip steak chuck turducken brisket. Boudin pork turkey, flank picanha chicken shankle. ";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>First, there was... The Qube </h1>
        <p>{text}</p>
      </div>
    );
  }
}
