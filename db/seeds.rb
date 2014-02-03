
colors = {primary: "#428bca",
          success: "#5cb85c",
          info:    "#5bc0de",
          warning: "#f0ad4e",
          danger:  "#d9534f"}


bruce = User.new(name: 'Bruce Wayne', email: 'bruce.waine@exemple.com', password: '123', password_confirmation: '123')
clark = User.new(name: 'Clark Kent', email: 'clark.kent@exemple.com', password: '123', password_confirmation: '123')
alan  = User.new(name: 'Alan Scott', email: 'alan.scott@exemple.com', password: '123', password_confirmation: '123')

bruce.articles.create! title: "Batman (from Wikipedia)", color: colors[:info], text: %{

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/7/75/Comic_Art_-_Batman_by_Jim_Lee_%282002%29.png/250px-Comic_Art_-_Batman_by_Jim_Lee_%282002%29.png" class="pull-left img-thumbnail">

Batman is a fictional character, a comic book superhero appearing in comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27 (May 1939). Originally referred to as "the Bat-Man" and still referred to at times as "the Batman," the character is additionally known as "the Caped Crusader", "the Dark Knight", and "the World's Greatest Detective", among other titles.

Batman is the secret identity of Bruce Wayne, an American billionaire, industrialist, and philanthropist. Having witnessed the murder of his parents as a child, he swore revenge on criminals, an oath tempered with the greater ideal of justice. Wayne trains himself both physically and intellectually and dons a bat-themed costume in order to fight crime. Batman operates in the fictional Gotham City, assisted by various supporting characters including his crime-fighting partner, Robin, his butler Alfred Pennyworth, the police commissioner Jim Gordon, and occasionally the heroine Batgirl. He fights an assortment of villains, often referred to as the "rogues gallery," which includes the Joker, the Penguin, the Riddler, Two-Face, Ra's al Ghul, Scarecrow, Poison Ivy, and Catwoman, among many others. Unlike most superheroes, he does not possess any superpowers; he makes use of intellect, detective skills, science and technology, wealth, physical prowess, martial arts skills, an indomitable will, fear, and intimidation in his continuous war on crime.

Batman became a very popular character soon after his introduction and gained his own comic book title, Batman, in 1940. As the decades wore on, differing interpretations of the character emerged. The late 1960s Batman television series used a camp aesthetic which continued to be associated with the character for years after the show ended. Various creators worked to return the character to his dark roots, with varying results. The comic books of this dark stage culminated in the acclaimed 1986 miniseries The Dark Knight Returns, by Frank Miller, as well as Batman: The Killing Joke by Alan Moore and Arkham Asylum: A Serious House on Serious Earth by Grant Morrison, among others. The overall success of Warner Bros.' live-action Batman feature films have also helped maintain public interest in the character.

An American cultural icon, Batman has been licensed and adapted into a variety of media, from radio to television and film, and appears on a variety of merchandise sold all over the world such as toys and video games. The character has also intrigued psychiatrists with many trying to understand the character's psyche and his true ego in society. In May 2011, Batman placed second on IGN's Top 100 Comic Book Heroes of All Time, after Superman. Empire magazine also listed him second in their 50 Greatest Comic Book Characters of All Time.

The character has been portrayed in films by Lewis Wilson, Robert Lowery, Adam West, Michael Keaton, Val Kilmer, George Clooney, Christian Bale, and soon by Ben Affleck.

}

clark.articles.create! title: "Superman (from Wikipedia)", color: colors[:info], text: %{

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/7/72/Superman.jpg/250px-Superman.jpg" class="pull-left img-thumbnail">

Superman is a fictional character, a superhero that appears in comic books published by DC Comics, and is considered an American cultural icon. Superman was created by writer Jerry Siegel and artist Joe Shuster, high school students living in Cleveland, Ohio, in 1933; the character was sold to Detective Comics, Inc. (later DC Comics) in 1938. Superman first appeared in Action Comics #1 (June 1938) and subsequently appeared in various radio serials, television programs, films, newspaper strips, and video games. With the success of his adventures, Superman helped to create the superhero genre and establish its primacy within the American comic book.

Superman's appearance is distinctive and iconic. He usually wears a blue costume, red cape, and stylized red-and-yellow "S" shield on his chest. This shield is used in a myriad of media to symbolize the character.

The origin story of Superman relates that he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction. Discovered and adopted by a Kansas farmer and his wife, the child is raised as Clark Kent and imbued with a strong moral compass. Very early on he started to display superhuman abilities, which upon reaching maturity, he resolved to use for the benefit of humanity. Superman resides and operates in the fictional American city of Metropolis. As Clark Kent, he is a journalist for the Daily Planet, a Metropolis newspaper. Superman's primary love interest is Lois Lane and his archenemy is supervillain Lex Luthor. Superman has fascinated scholars, with cultural theorists, commentators, and critics alike exploring the character's impact and role in the United States and worldwide. The character's ownership has often been the subject of dispute, with Siegel and Shuster twice suing for the return of legal ownership. Superman has been labeled as the greatest comic book hero of all time by IGN.

}


clark.articles.create! title: "Krypton (from Wikipedia)", color: colors[:success], text: %{

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Kryton.jpg/250px-Kryton.jpg" class="pull-left img-thumbnail">

Krypton is a fictional planet in the DC Universe and the native world of Superman. In some stories, it is also the native world of Supergirl, Krypto the Superdog, and Power Girl (albeit an alternate universe version in her case, designated "Krypton-Two"). Krypton has been portrayed consistently as having been destroyed just after Superman's flight from the planet, with exact details of its destruction varying by time period, writers and franchise. Kryptonians were the dominant species on Krypton.

The planet was created by Jerry Siegel and Joe Shuster, and was first referred to in Action Comics #1 (June 1938). The planet was given its first full-fledged appearance in Superman #1 (Summer 1939).

}


clark.articles.create! title: "Lex Luthor (from Wikipedia)", color: colors[:danger], text: %{

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Luthor544.PNG/220px-Luthor544.PNG" class="pull-right img-thumbnail">

Alexander Joseph "Lex" Luthor is a fictional character, a supervillain appearing in comic books published by DC Comics. Luthor is the archenemy of Superman, though given his high status as a supervillain, he has also come into conflict with Batman and other superheroes in the DC Universe. Created by Jerry Siegel and Joe Shuster, the character first appeared in Action Comics #23 (April 1940). Luthor is a wealthy, power-mad business magnate of high intelligence and incredible technological prowess. Luthor's goals typically center on killing Superman, the foremost obstacle to achieving the villain's megalomaniacal goals. Despite periodically wearing a powered exoskeleton, Luthor has traditionally lacked superpowers or a dual identity.

Lex Luthor typically appears in comic books and other media as a bald business magnate with immense wealth and corporate power. However, Luthor was originally depicted as a mad scientist who, in the vein of pulp novels, wreaks havoc on the world with his futuristic weaponry. The character was later remodeled as a magnate and industrialist. In his earliest appearances, Luthor is shown with a full head of red hair. Despite this, the character later became hairless as the result of an artist's mistake. A 1960 story by Jerry Siegel expanded upon Luthor's origin and motivations, revealing him to be a childhood friend of Superman's who lost his hair when a fire destroyed his laboratory, a fire which Luthor blamed on Superboy, who was attempting to save Luthor from a lifeform Luthor had created in vitro that was threatening to kill Luthor.

Following the 1985 limited series Crisis on Infinite Earths, the character was re-imagined as a Machiavellian industrialist and white-collar criminal, even briefly serving as President of the United States. In recent years, various writers have revived Luthor's mad scientist persona from the 1940s. The character was ranked 4th on IGN's list of the Top 100 Comic Book Villains of All Time and as the 8th Greatest Villain by Wizard on its 100 Greatest Villains of All Time list. Luthor is also described as a "megavillain" by comic book critic Peter Sanderson, one of a few genre-crossing villains whose adventures take place "in a world in which the ordinary laws of nature are slightly suspended".

}

bruce.articles.create! title: "Robin (from Wikipedia)", color: colors[:info], text: %{

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/0/01/Damian_Wayne_as_Robin.jpg/150px-Damian_Wayne_as_Robin.jpg" class="pull-right img-thumbnail">

Robin is the name of several fictional characters appearing in comic books published by DC Comics, originally created by Bob Kane, Bill Finger and Jerry Robinson, as a junior counterpart to DC Comics superhero Batman. The team of Batman and Robin is commonly referred to as the Dynamic Duo or the Caped Crusaders.

The character's first incarnation Dick Grayson debuted in Detective Comics #38 (April 1940). Conceived as a vehicle to attract young readership, Robin garnered overwhelmingly positive critical reception, doubling the sales of the Batman related comic books. The early adventures of Robin included Star Spangled Comics #65–130 (1947–1952), which was the character's first solo feature. Robin made regular appearances in Batman related comic books and other DC Comics publications from 1940 through the early 1980s until the character set aside the Robin identity and became the independent superhero Nightwing.

Afterwards, the character's second incarnation Jason Todd debuted in Batman #357 (1983). This Robin made regular appearances in Batman related comic books until 1988, when the character was murdered by the Joker in A Death in the Family (1989). Jason would later find himself alive after a reality changing incident, eventually becoming the Red Hood.

The premiere Robin limited series was published in 1991 which featured the character's third incarnation Tim Drake training to earn the role of Batman's junior partner. Following two successful sequels, the monthly Robin ongoing series began in 1993 and ended in early 2009, which also helped his transition from sidekick to a superhero in his own right.

The fourth Robin incarnation was established DC Comics character Stephanie Brown and thus the first in-continuity female version of the character. But shortly after her acquisition of the Robin mantle, she was stripped of the identity by Batman and was apparently killed by the supervillain Black Mask in the crossover Batman: War Games (2004). It has since been revealed that her death was a ruse and she eventually returned to resume her previous identity before becoming the sixth Batgirl. She was later retconned out of existence as part of the The New 52 and is currently discounted as both Robin and Batgirl.

In the final issue of Battle for the Cowl, Damian Wayne (Bruce Wayne's son) becomes the new Robin. In the wake of The New 52, Tim Drake later takes on the identity of Red Robin, Jason Todd still operates as the Red Hood, Dick Grayson reclaims his role as Nightwing and the status of Stephanie Brown is unknown. After Damian is killed in a 2013 comic, the position of Robin becomes vacant.

In The New 52's Earth 2 alternate universe continuity of Worlds Finest, Batman and Catwoman married, and their daughter Helena Wayne was that universe's Robin, until her father died at the hands of an invasion force from Apokolips-2, along with that universe's Superman and Wonder Woman. Helena is currently exiled on Earth 0, along with Power Girl, and has adopted a new persona as Huntress.

}

alan.articles.create! title: "Green Lantern (from Wikipedia)", color: color[:success], text: %{

<img src="http://upload.wikimedia.org/wikipedia/pt/thumb/4/4d/Lanternas_Verdes_por_Ethan_Van_Sciver.jpg/260px-Lanternas_Verdes_por_Ethan_Van_Sciver.jpg" class="pull-left img-thumbnail">

Green Lantern is the name of several superheroes from the fictional DC Universe, all of whom are characterized by a power ring and the ability to create solid constructs with the ring.

The first Green Lantern (Alan Scott) was created by writer Bill Finger and artist Martin Nodell in All-American Comics #16 (July 1940). However, he was not related to the Green Lantern Corps other than by name, as specified in Green Lantern: Rebirth.

Each Green Lantern possesses a power ring and green lantern that gives the user great control over the physical world as long as the wielder has sufficient willpower and strength to wield it. The ring is one of the most powerful weapons in the universe and can be very dangerous. While the ring of the Golden Age Green Lantern (Alan Scott) is magically powered, the rings worn by all subsequent Lanterns are technological creations of the Guardians of the Universe, who granted such rings to worthy candidates. These individuals made up the intergalactic police force known as the Green Lantern Corps.

After World War II, when sales of superhero comic books generally declined, DC ceased publishing new adventures of Alan Scott as the Green Lantern. In 1959, at the beginning of the Silver Age of Comic Books, DC editor Julius Schwartz assigned writer John Broome and artist Gil Kane to revive the Green Lantern character, this time as test pilot Hal Jordan who became a founding member of the Justice League of America. In 1970, writer Denny O'Neil and artist Neal Adams teamed Green Lantern with archer Green Arrow in groundbreaking, socially conscious, and award-winning stories that pitted the sensibilities of the law-and-order-oriented Green Lantern with the populist Green Arrow. Several cosmically-themed series followed, as did occasional different individuals in the role of Earth's Green Lantern. Most prominent of these are Hal Jordan, John Stewart, Guy Gardner and Kyle Rayner.

Each of the Earth's Green Lanterns has been a member of either the Justice Society of America or the Justice League of America, and John Stewart was featured as one of the main characters in both the Justice League and the Justice League Unlimited animated series. The Green Lanterns are often depicted as being close friends of the various men who have been the Flash, the most notable friendships having been between Alan Scott and Jay Garrick (the Golden Age Green Lantern and Flash), Hal Jordan and Barry Allen (the Silver Age Green Lantern and Flash), Kyle Rayner and Wally West (the modern-age Green Lantern and Flash), and Jordan also being friends with West.

> _"In brightest day, in blackest night,_
>
> _No evil shall escape my sight._
>
> _Let those who worship evil's might,_
>
> _Beware my power, Green Lantern's light!!!"_
>

}

alan.articles.create! title: "Alan Scott", color: color[:info], text: %{

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/7/75/Alan_scott-ross.jpg/250px-Alan_scott-ross.jpg" class="pull-right img-thumbnail">

Alan Scott's Green Lantern history originally began thousands of years ago when a mystical "green flame" meteor fell to Earth in ancient China. The voice of the flame prophesied that it would act three times: once to bring death (a lamp-maker named Luke Fairclough crafted the green metal of the meteor into a lamp; in fear and as punishment for what they thought sacrilege, the local villagers killed him, only to be destroyed by a sudden burst of the green flame), once to bring life (in modern times, the lamp came into the hands of a patient in a mental institution who fashioned the lamp into a modern lantern; the green flame restored him to sanity and gave him a new life), and once to bring power. By 1940, the lantern passed into the possession of Alan Scott, a young engineer. Following a railroad-bridge collapse of which he was the only survivor, the flame instructed Scott how to fashion a ring from its metal, to give him fantastic powers as the superhero Green Lantern. He adopted a colorful costume and became a crime-fighter. Alan was a founding member of the Justice Society of America.

After the Crisis on Infinite Earths (although the original origin story was still in continuity), a later Tales of the Green Lantern Corps story was published that brought Scott even closer to the Corps' ranks, when it was revealed that Alan Scott was predated as Earth's Green Lantern by a Green Lantern named Yalan Gur, a resident of China. Not only had the Corps' now-familiar green, black and white uniform motif not yet been adopted, but Yalan Gur altered the basic red uniform to more closely resemble the style of clothing worn by his countrymen. Power ultimately corrupted this early Green Lantern, as he attempted to rule over mankind, which forced the Guardians to cause his ring to manifest a weakness to wood, the material from which most Earth weapons of the time were fashioned. This allowed the Chinese peasants to ultimately defeat their corrupted "champion". His ring and lantern were burned and it was during this process that the “intelligence” inhabiting the ring and the lantern, and linking them to the Guardians, was damaged. Over time, when it had occasion to manifest itself, this "intelligence" became known as the mystical 'Starheart' of fable.

Centuries later, it was explained, when Scott found the mystical lantern, it had no memory of its true origins, save a vague recollection of the uniform of its last master. This was the origin of Scott’s distinctive costume. Due to its damaged link to them, the Guardians presumed the ring and lantern to be lost in whatever cataclysm overcame their last owner of record. Thus Scott was never noticed by the Guardians and went on to carve a history of his own apart from that of the Corps, sporting a ring with an artificially induced weakness against anything made of wood. Honoring this separate history, the Guardians never moved to force Scott to relinquish the ring, formally join the Corps, or adopt its colors. Some sort of link between Scott and the Corps, however, was hinted at in a Silver Age cross-over story which depicts Scott and Hal Jordan charging their rings at the same Power Battery while both reciting the "Brightest Day" oath. During the Rann-Thanagar War, it was revealed that Scott is an honorary member of the Corps.

On June 1, 2012, DC Comics announced that it would be re-introducing Alan Scott as a gay man in the title "Earth 2." The issue was released on June 6, 2012. In its story, Alan Scott and his male lover were both passengers aboard a train, but before Scott could propose marriage to his lover, the latter was killed when their train was wrecked in the railroad-bridge collapse that Scott alone survived.

}


