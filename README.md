# zeeko683.github.io
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>British History Timeline (Based on Provided Summaries)</title>
    <style>
        /* Basic styling */
        body {
            font-family: sans-serif;
            background-color: #f4f4f4;
            line-height: 1.6;
            padding: 20px;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 40px;
        }

        /* Timeline container */
        .timeline {
            position: relative;
            max-width: 800px; /* Adjust max width as needed */
            margin: 0 auto; /* Center the timeline */
        }

        /* The vertical line in the center */
        .timeline::after {
            content: '';
            position: absolute;
            width: 4px; /* Line thickness */
            background-color: #3498db; /* Line color */
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -2px; /* Half of the width */
            z-index: 1;
        }

        /* Container for each timeline item */
        .timeline-item {
            padding: 10px 40px; /* Padding around content */
            position: relative;
            background-color: inherit;
            width: 50%; /* Each item takes half the width */
            box-sizing: border-box;
            margin-bottom: 30px; /* Space between items */
            z-index: 2;
        }

        /* Position items on alternating sides */
        .timeline-item:nth-child(odd) {
            left: 0;
            padding-right: 60px; /* Add space between text and center line */
        }

        .timeline-item:nth-child(even) {
            left: 50%;
            padding-left: 60px; /* Add space between text and center line */
        }

        /* The circle/dot on the timeline */
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 16px; /* Dot size */
            height: 16px; /* Dot size */
            right: -8px; /* Position dot on the line (half its width) */
            background-color: white;
            border: 3px solid #3498db; /* Dot border color matches line */
            top: 15px; /* Align dot vertically */
            border-radius: 50%;
            z-index: 3; /* Ensure dot is above the line */
        }

        /* Position dots for even items */
        .timeline-item:nth-child(even)::after {
            left: -8px; /* Position dot on the line */
        }

        /* The content box */
        .timeline-content {
            padding: 15px 20px;
            background-color: white;
            position: relative;
            border-radius: 6px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            border: 1px solid #ddd;
        }

        /* Optional: Add arrows pointing to the timeline */
        .timeline-item:nth-child(odd) .timeline-content::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 18px;
            width: 0;
            z-index: 1;
            right: -10px; /* Position arrow */
            border: medium solid white;
            border-width: 10px 0 10px 10px;
            border-color: transparent transparent transparent white;
        }
         .timeline-item:nth-child(odd) .timeline-content::after { /* Arrow border */
            content: " ";
            height: 0;
            position: absolute;
            top: 17px;
            width: 0;
            z-index: 0;
            right: -11px; /* Position arrow border */
            border: medium solid #ddd;
            border-width: 11px 0 11px 11px;
            border-color: transparent transparent transparent #ddd;
        }


        .timeline-item:nth-child(even) .timeline-content::before {
            content: " ";
            height: 0;
            position: absolute;
            top: 18px;
            width: 0;
            z-index: 1;
            left: -10px; /* Position arrow */
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
        }
         .timeline-item:nth-child(even) .timeline-content::after { /* Arrow border */
            content: " ";
            height: 0;
            position: absolute;
            top: 17px;
            width: 0;
            z-index: 0;
            left: -11px; /* Position arrow border */
            border: medium solid #ddd;
            border-width: 11px 11px 11px 0;
            border-color: transparent #ddd transparent transparent;
        }


        .timeline-content h3 {
            margin-top: 0;
            color: #3498db; /* Heading color */
        }

        .timeline-content p {
            margin-bottom: 0;
        }

        /* Responsive adjustments for smaller screens */
        @media screen and (max-width: 768px) {
            /* Place the line to the left */
            .timeline::after {
                left: 25px; /* Adjust position */
                margin-left: 0;
            }

            /* Full width items */
            .timeline-item {
                width: 100%;
                padding-left: 60px; /* Space for content next to the line */
                padding-right: 15px;
                left: 0 !important; /* Override inline style */
            }

            /* Position dots on the left line */
            .timeline-item::after {
                left: 17px; /* (25px line pos - half dot width 8px) = 17px */
                right: auto;
            }
            /* Ensure even items dots are also on the left */
             .timeline-item:nth-child(even)::after {
                 left: 17px;
             }

            /* Adjust arrows for left alignment */
            .timeline-item .timeline-content::before {
                left: -10px;
                right: auto;
                border-width: 10px 10px 10px 0;
                border-color: transparent white transparent transparent;
            }
             .timeline-item .timeline-content::after {
                left: -11px;
                right: auto;
                border-width: 11px 11px 11px 0;
                border-color: transparent #ddd transparent transparent;
            }
             /* Remove right arrow for odd items */
             .timeline-item:nth-child(odd) .timeline-content::before,
             .timeline-item:nth-child(odd) .timeline-content::after {
                border-left-color: transparent; /* Ensure they point left */
                border-right-color: white; /* Adjust colors as needed */
             }
              .timeline-item:nth-child(odd) .timeline-content::after {
                 border-right-color: #ddd;
              }
        }

    </style>
</head>
<body>

    <h1>British History Timeline (Based on Provided Summaries)</h1>

    <div class="timeline">

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Stonehenge (c. 2150 BC)</h3>
                <p>
                    One of the most famous remnants of very early Britain. It's not the only stone circle, with others like Callanish in Scotland also existing from ancient times.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Iron Age (Starts c. 800 BC)</h3>
                <p>
                    During this period, the Celts lived across most of Europe, including Britain. They, along with the Scots and Picts (mostly in Scotland), were the inhabitants encountered by the Romans.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Roman Invasion (Successful in 43 AD)</h3>
                <p>
                    Initiated by Emperor Claudius, the Romans successfully invaded after previous attempts. They named most of England and Wales 'Britannia'. This period brought relative peace and prosperity, but Roman culture didn't deeply penetrate the native Celtic population and largely left with the Romans. Remnants include Hadrian's Wall (built AD 122-130), the Antonine Wall (begun AD 142), roads, forts, villas, baths, and placenames like London (Londinium) and Colchester.
                </p>
            </div>
        </div>

         <div class="timeline-item">
            <div class="timeline-content">
                <h3>Hadrian's Wall Built (AD 122-130)</h3>
                <p>
                    A 117km wall built by the Romans to mark the northern border of Britannia and keep out the Scots and Picts. It roughly corresponds to the current English-Scottish border and parts are still intact.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Roman Withdrawal (AD 409-410)</h3>
                <p>
                    The Romans withdrew from Britain, leaving behind structures but taking much of their culture. The country fell into chaos as native tribes and foreign invaders battled for power. Many Roman towns crumbled as people returned to rural life.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Germanic Invasions / Anglo-Saxon Period (c. 410-1066)</h3>
                <p>
                    Germanic tribes (Angles, Saxons, Jutes) invaded from the 5th century onwards, settling in large numbers. They integrated with the existing population, introduced an agricultural lifestyle, new farming methods, and founded villages. The Celtic language was largely replaced by a Germanic dialect (Old English). The country was divided into warring Anglo-Saxon kingdoms. Important archaeological finds include the Sutton Hoo Ship Burial (early AD 600s).
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Introduction of Christianity (Starts 5th-7th Centuries AD)</h3>
                <p>
                    Christianity spread from two directions: from Ireland (converted by St Patrick in 432 AD) northwards, and from mainland Europe southwards via Roman missionary St. Augustine (who converted the Kentish King Aethelbert around 579 AD).
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Viking Invasions (Raids from 8th Century, Settlement from 870s)</h3>
                <p>
                    Starting with raids (e.g., Lindisfarne 793-94), Vikings eventually began settling, particularly in the North (Danelaw). They shared an agricultural lifestyle and similar language roots with Anglo-Saxons, leading to interaction, intermarriage, and mixing of Old Norse and Old English languages (evident in place names like Grimsby, Derby). King Alfred the Great of Wessex notably resisted the Vikings and promoted learning.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Norman Conquest (1066) / Battle of Hastings (14 Oct 1066)</h3>
                <p>
                    The last successful invasion of Britain. William, Duke of Normandy (later 'the Conqueror'), claimed the English throne after King Harold II inherited it. After defeating a Scandinavian claimant, Harold marched south to face William. William won the Battle of Hastings, killing Harold. William was crowned King William I on Christmas Day 1066. This event is depicted on the Bayeux Tapestry.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Domesday Book Compiled (1086)</h3>
                <p>
                    Commissioned by King William I in 1085 and finished in 1086, this 'Great Survey' recorded land ownership, property, resources, and population across England. Its purpose was to assess taxable assets and settle land disputes among Norman barons. Nicknamed 'Domesday' because its judgements were seen as final, like the Day of Judgement. It provides valuable historical insight into the feudal system and society of the time.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>English Foothold in Ireland Established (c. 1170)</h3>
                <p>
                    An English nobleman ("Strongbow") helped an Irish king regain his throne and was granted lands in return, establishing an English presence that expanded over centuries.
                </p>
            </div>
        </div>

         <div class="timeline-item">
            <div class="timeline-content">
                <h3>Magna Carta Signed (1215)</h3>
                <p>
                    Forced upon the unpopular King John by rebellious barons at Runnymede. This charter established fundamental rights (fair trial, protection from arbitrary arrest) and, crucially, the principle that everyone, including the monarch, is subject to the law. Although initially ignored by John, leading to civil war, it became a landmark document forming the basis of the English constitution.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Conquest / Annexation of Wales Completed (1284)</h3>
                <p>
                    Led by King Edward I, involving invasions and the construction of castles. The Statute of Rhuddlan (1284) outlined governance arrangements. Since then, the heir apparent to the British throne has traditionally been titled the Prince of Wales.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Black Death (First Wave, c. 1350)</h3>
                <p>
                    The first wave of the Bubonic Plague reached Britain around 1350. It wiped out approximately a third of the population, leading to severe labour shortages and weakening the feudal system.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Hundred Years' War (1337-1453)</h3>
                <p>
                    A series of conflicts between England and France, primarily over the French throne and lands in France. Despite its name, it lasted 116 years with intermittent peace. England ultimately lost, causing unrest among nobles and contributing to the Wars of the Roses.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Wars of the Roses (1455-1485)</h3>
                <p>
                    A power struggle for the English crown between two branches of the House of Plantagenet: the House of York (white rose) and the House of Lancaster (red rose). Characterised by powerful barons with private armies challenging the monarchy. The conflict saw alternating kings. It ended with the Battle of Bosworth Field (1485), where Henry Tudor (Lancaster) defeated Richard III (York). Henry VII then married Elizabeth of York, uniting the houses and starting the Tudor Dynasty.
                </p>
            </div>
        </div>

         <div class="timeline-item">
            <div class="timeline-content">
                <h3>Tudor Dynasty (1485-1603)</h3>
                <p>
                    Started by Henry VII after the Wars of the Roses. Included monarchs Henry VII, Henry VIII, Edward VI, Mary I, and Elizabeth I. Known for establishing the Church of England, expanding the navy, and the English Renaissance.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>The Reformation (England, Begins c. 1534)</h3>
                <p>
                    Driven by Henry VIII's desire to annul his marriage to Catherine of Aragon. When the Pope refused, Henry broke away from the Catholic Church, establishing the Church of England (Anglican Church) with the monarch as its supreme head (Act of Supremacy, 1534). This was primarily a political, not doctrinal, reform initially, but led to significant religious and societal changes, increased royal power and wealth (through seizing church assets), and the founding of the Royal Navy.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Reign of Elizabeth I / Golden Age (1558-1603)</h3>
                <p>
                    The last Tudor monarch, known as "Gloriana" or "the Virgin Queen". Her long reign brought political and religious stability (reinstating Protestantism), cultural flourishing (patronage of arts, Shakespeare), naval strength, exploration (Raleigh, Drake), and early colonization efforts. She remained unmarried, using it as a diplomatic tool.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Spanish Armada Defeated (1588)</h3>
                <p>
                    Philip II of Spain sent a large fleet to invade Protestant England due to religious, political, and trade rivalries. The "Invincible Armada" was intercepted by the English navy (led by commanders like Sir Francis Drake) in the Channel, damaged in a night raid, and further scattered by storms ("Protestant wind") while attempting to return via Scotland and Ireland. The victory boosted English morale and Elizabeth I's popularity.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Union of the Crowns (1603)</h3>
                <p>
                    Upon Elizabeth I's death without an heir, James VI of Scotland (son of Mary, Queen of Scots) ascended the English throne as James I. This united the crowns of Scotland and England in a personal union under one monarch (start of the Stuart Dynasty), but the countries remained separate political entities with their own governments.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Gunpowder Plot (November 5th, 1605)</h3>
                <p>
                    A failed assassination attempt against King James I by a group of Catholic conspirators led by Guy Fawkes. They planned to blow up the Houses of Parliament during the State Opening. Fawkes was discovered with gunpowder barrels in the cellars. The plot was foiled, conspirators executed, and the event is commemorated annually on Bonfire Night / Guy Fawkes Night.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>King James Bible Published (1611)</h3>
                <p>
                    Commissioned by King James I, this new English translation became highly influential and praised for its majestic style and perceived faithfulness. It aimed for good liturgical sound and remains one of the most famous Bible translations.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>English Civil War (1642-1649)</h3>
                <p>
                    A conflict between King Charles I (Royalists/Cavaliers) and Parliament (Parliamentarians/Roundheads, led by Oliver Cromwell) over the powers of the monarchy versus Parliament, exacerbated by religious and financial disputes. Charles I believed strongly in the Divine Right of Kings and clashed repeatedly with Parliament, attempting to rule without it for 11 years (1629-1640). The attempt to arrest five MPs in 1642 was a key trigger. The Parliamentarians eventually won, captured Charles I, tried him for high treason, and executed him (beheaded 27 Jan 1649).
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Commonwealth of England (1649-1660)</h3>
                <p>
                    After Charles I's execution, England was declared a republic (Commonwealth). The monarchy was abolished. Initially ruled by military government, Oliver Cromwell became Lord Protector in 1653, ruling as a de facto dictator until his death (1658). This period (also called the Interregnum) saw Puritan influence dominate society, leading to austerity and the banning of public pleasures like theatre and Christmas celebrations.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>The Restoration (1660)</h3>
                <p>
                    After Cromwell's death and his son's brief, unsuccessful rule, Parliament invited Charles II (son of Charles I, exiled in France) back to restore the monarchy. This ended the Puritan Commonwealth. Charles II became known as the 'Merry Monarch' for restoring celebrations and festivities, though his Catholic leanings caused tension with Parliament.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Great Plague of London (1665-1666)</h3>
                <p>
                    The final major outbreak of the bubonic plague in England, centered in London. It killed an estimated 15% of London's population (peaking in summer 1665). Houses with infections were sealed, marked with red crosses, and bodies collected at night. The nursery rhyme "Ring-a-ring of roses" is associated with this event.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Great Fire of London (September 2-5, 1666)</h3>
                <p>
                    Started in a baker's shop on Pudding Lane and destroyed much of the medieval City of London, which consisted largely of wooden houses. Led to major reconstruction efforts, mostly using stone, with architect Christopher Wren designing many new buildings, including St Paul's Cathedral. The fire also helped eradicate the plague. Commemorated in the nursery rhyme "London's Burning".
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Glorious Revolution (1688)</h3>
                <p>
                    King James II (Charles II's brother) was unpopular due to his Catholic faith and absolutist tendencies. Protestant nobles invited the Dutch Protestant King William III of Orange (who was married to James II's daughter, Mary II) to take the throne. James II fled to France when William's fleet arrived. William and Mary became co-rulers. Known as 'Glorious' because it was largely bloodless. A turning point for constitutional monarchy, as William and Mary accepted more restrictions from Parliament.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Bill of Rights (1689)</h3>
                <p>
                    Signed by William III and Mary II, this act acknowledged key constitutional principles: the right to regular Parliaments, free elections, freedom of speech in Parliament, and freedom to petition the monarch. It also forbade the monarch from being Catholic. Seen, along with Magna Carta, as a foundation of Britain's constitutional monarchy.
                </p>
            </div>
        </div>

         <div class="timeline-item">
            <div class="timeline-content">
                <h3>Acts of Union (England/Wales & Scotland) (1707)</h3>
                <p>
                    Politically united the Kingdom of England (which included Wales) and the Kingdom of Scotland to form the Kingdom of Great Britain. The separate English and Scottish parliaments were dissolved and replaced by a new Parliament of Great Britain.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Industrial Revolution (c. 1760-1840)</h3>
                <p>
                    A period of major technological, socioeconomic, and cultural change, starting in Britain. Key factors included the Agricultural Revolution, economic/political stability (partly from empire/trade, including the Triangular Trade involving enslaved Africans), crucial inventions like the improved steam engine (James Watt), abundant coal resources, and an intellectual climate favouring free thinking. Manufacturing shifted from homes/small shops to large factories, leading to mass urbanization. Working and living conditions for the majority were initially terrible, with low wages, long hours, dangerous work (including child labour), overcrowded and unsanitary cities. This era also saw the rise of railways (first line 1825).
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Acts of Union (Great Britain & Ireland) (1801)</h3>
                <p>
                    United the Kingdom of Great Britain and the Kingdom of Ireland to create the United Kingdom of Great Britain and Ireland. Ireland had been in personal union with England/Britain since 1542.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Reign of Queen Victoria / Victorian Era (1837-1901)</h3>
                <p>
                    A long reign marked by significant industrial, cultural, political, scientific, and military change, and vast expansion of the British Empire ("The sun never sets..."). Victoria became a symbol of stability, morality, and duty ('Victorian values'). Society saw stark contrasts between rich and poor, but also social reforms (factory conditions, trade unions, pensions). The monarch's political power continued to decline, shifting towards a more ceremonial, non-partisan role.
                </p>
            </div>
        </div>

         <div class="timeline-item">
            <div class="timeline-content">
                <h3>Irish Potato Famine / Great Hunger (1845-1849)</h3>
                <p>
                    A period of mass starvation, disease, and emigration in Ireland caused by potato blight destroying the main food source. Approximately one million people died, and over a million emigrated. British government response and continued food exports from Ireland during the famine remain controversial.
                </p>
            </div>
        </div>

         <div class="timeline-item">
            <div class="timeline-content">
                <h3>Women's Suffrage Movement Gains Momentum (Mid-19th Century - Early 20th Century)</h3>
                <p>
                    Campaigns for women's right to vote intensified from the 1850s. Early campaigners (suffragists) used peaceful methods. From 1903, the suffragettes (led by figures like Emmeline Pankhurst) adopted militant tactics (protests, property damage, hunger strikes). Public opinion shifted significantly during WWI as women took on vital roles.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Easter Rising (Ireland) (1916)</h3>
                <p>
                    An armed insurrection in Ireland during Easter Week, launched by Irish republicans aiming to end British rule and establish an independent Irish Republic while the UK was engaged in WWI. It was a key event in the Irish Revolutionary period.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Representation of the People Act (Partial Women's Suffrage) (1918)</h3>
                <p>
                     Passed after WWI, this act granted the vote to women aged 30 or over who met property qualifications. This was a major step, though full voting equality with men (at age 21) wasn't achieved until 1928.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Anglo-Irish Treaty / Irish Free State Established (1921-1922)</h3>
                <p>
                     Ended the Irish War of Independence. Established the Irish Free State (dominion status). Allowed Northern Ireland (6 counties) to opt out and remain part of the UK, which it did. This partition led to the current political division of the island.
                </p>
            </div>
        </div>

         <div class="timeline-item">
            <div class="timeline-content">
                <h3>Republic of Ireland Act (1948)</h3>
                <p>
                    Confirmed that the Irish state was officially a republic, fully independent from the UK and the Commonwealth (though it later rejoined the Commonwealth).
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Windrush Generation Arrival Begins (June 22, 1948)</h3>
                <p>
                    Following the British Nationality Act 1948 (granting UK citizenship to people in British colonies), the ship Empire Windrush arrived bringing workers from the Caribbean (Jamaica, Trinidad etc.) to fill post-WWII labour shortages, particularly in the NHS and transport. This marked the beginning of significant post-war Commonwealth immigration. Later, this generation faced difficulties proving their legal status due to poor record-keeping and changing immigration policies ('hostile environment').
                </p>
            </div>
        </div>

         <div class="timeline-item">
            <div class="timeline-content">
                <h3>The Troubles (Northern Ireland) (Late 1960s - 1998)</h3>
                <p>
                    A violent sectarian conflict primarily between Unionists/Loyalists (mostly Protestant, wanting NI to remain in UK) and Nationalists/Republicans (mostly Catholic, wanting NI to join Republic of Ireland). Involved state forces (police/RUC, British Army) and paramilitary groups (e.g., Republican IRA, Loyalist UDA/UVF). Characterised by bombings, shootings, riots, protests, and civil disobedience. Key events include Bloody Sunday (1972) and the Brighton Bombing (1984). Over 3,500 people were killed. Ended largely by the Good Friday Agreement.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Good Friday Agreement (1998)</h3>
                <p>
                    Brokered peace in Northern Ireland, ending most of the violence of the Troubles. Established power-sharing between Unionists and Nationalists in the Northern Ireland Assembly. Affirmed that Northern Ireland would remain in the UK unless a majority voted otherwise. Approved by referendums in both Northern Ireland and the Republic of Ireland.
                </p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-content">
                <h3>Brexit Referendum & Aftermath (Referendum 2016, Left EU Jan 2020)</h3>
                <p>
                    A referendum held on the UK's membership in the European Union resulted in a 51.9% vote to leave. Key motivations cited for leaving included concerns over immigration, sovereignty (regaining control from the EU), and perceived EU bureaucracy/expense. The UK formally left the EU in January 2020 after negotiations led by successive Prime Ministers (Theresa May, Boris Johnson). Brexit has led to ongoing economic adjustments, renewed calls for Scottish independence (as Scotland voted strongly to remain), and complex issues regarding the Northern Ireland border.
                </p>
            </div>
        </div>

    </div> </body>
</html>
