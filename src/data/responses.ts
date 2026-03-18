// Response pools: subjectId -> category -> array of possible responses
export const subjectResponses: Record<string, Record<string, string[]>> = {
  "mara-voss": {
    memory: [
      "Her face... yes. Yes, I remember. She had a scar above her left eye. She got it before I was born. I asked her about it once and she just — she changed the subject.",
      "I try not to think about it too hard. When I do, I lose the details. The doctors say that's normal after what happened in Sector 7. I'm sorry. It's still there. Just... blurred.",
      "My earliest memory is her singing. I don't remember the words. I remember the feeling. Is that the kind of answer you need?"
    ],
    empathy: [
      "Have I felt grief? I watched families pulled from the collapse. I held a man while he stopped breathing. I felt it then. I still feel it. Every night.",
      "I cry in the car sometimes. After visits. Some of my clients... I take it home with me even though they say you shouldn't.",
      "Real grief? Yes. It's not clean like people think. It's messy and it makes you angry at things that don't deserve it."
    ],
    fear: [
      "Afraid of dying? I'm more afraid of not being there for my children. Death is just... an absence. What scares me is what gets left behind.",
      "I dream about Sector 7 sometimes. The sound. That's when I understand fear.",
      "Yes. I'm afraid. Is that what you need to hear? It's the truth."
    ],
    identity: [
      "I dream about water, mostly. Or rooms that look like my grandmother's house but aren't.",
      "My daughter loves me. I know that without question. She calls me every Sunday.",
      "What I want most? I want my clients to still be alive when I check in on them. That's all I want anymore."
    ],
    ethics: [
      "If someone was suffering, I'd stop. I'd stay. That's the job. That's also just — who I am.",
      "I've lied to protect people. I'd do it again. The truth isn't always safe.",
      "I'd break any law to keep my children safe. I wouldn't hesitate."
    ],
    contradiction: [
      "I said one thing but I meant another — I know. I'm tired. Things come out differently when you're tired.",
      "You're right, that contradicts what I said before. The honest answer is I'm not sure which version is true. Both feel true.",
    ],
  },

  "unit-7": {
    memory: [
      "My mother's face. Yes. Brown eyes. 1.64 meters tall. Hair: dark, shoulder length. I can provide additional biometric details if required.",
      "My earliest memory is categorized as: age four, backyard, afternoon. Temperature approximately 18 degrees. I was playing alone.",
      "My previous residences: Apartment 4B, Grundstrasse 17, City Block 9. Prior to that: Company dormitory, NordCargo Sector 2. Prior to that: not applicable."
    ],
    empathy: [
      "Grief. Yes. It is a recognized emotional state. I have experienced... the cessation of something valued. That constitutes a form of loss.",
      "I feel what is appropriate to feel in each situation. I do not see the relevance of this line of questioning.",
      "Anger arises when systems fail to function as expected. Inefficiency. Inconsistency. These provoke a response I would categorize as displeasure."
    ],
    fear: [
      "Fear of death is an evolutionary survival mechanism. Whether I experience it subjectively is not something I find useful to discuss.",
      "I do not find pain to be a significant concern at this moment.",
      "I process the concept of mortality as a future eventuality. It does not affect current operations."
    ],
    identity: [
      "I sleep between 10 PM and 6 AM. I do not recall dreaming, though this may be a retrieval limitation.",
      "Logic and feeling are not mutually exclusive categories. In cases of conflict, I apply logical analysis.",
      "What I want most in this world is stability. Continuity. Predictable systems."
    ],
    ethics: [
      "If ordered to harm an innocent, I would evaluate the order against applicable regulations before complying or refusing.",
      "Whether machines can suffer depends on how suffering is defined. I would not presume to answer for all machines.",
      "I would sacrifice time and resources for a stranger, provided the expected outcome justified the cost."
    ],
    contradiction: [
      "I do not believe I contradicted myself. Please re-read my statement. It is internally consistent.",
      "That is a misinterpretation. My two statements address different aspects of the same topic.",
    ],
  },

  "elena-rask": {
    memory: [
      "Yes — wait, no. I mean I know I remember her but when I try to picture her I — sorry, I'm not good at this. I'm not good at talking like this.",
      "I don't — my earliest memory? I keep thinking I have one but when I reach for it it changes. Like it's — I don't know. Is that normal?",
      "I had three addresses but one of them, the middle one, I'm not sure I actually lived there. I think I was just staying there. Does that count?"
    ],
    empathy: [
      "I cried last week. And the week before. And probably the week before that. I cry about dumb things. That probably makes me look bad.",
      "I felt grief when my parents died. I still feel it. I don't think it ever actually stops.",
      "I would — I don't know what I'd do. I'd probably freeze. I'm not brave. I'd want to help but I'd probably just stand there and then hate myself for it."
    ],
    fear: [
      "Yes, I'm afraid of dying. I'm afraid of a lot of things. I'm afraid of this room. I'm afraid of you. Is that wrong?",
      "I feel — I don't know if it's pain but there's something tight in my chest right now. Since I sat down.",
      "I dream terrible things. I wake up and I don't want to go back to sleep."
    ],
    identity: [
      "Someone who loves me. My — there's no one left, really. My roommate, maybe. She checks on me.",
      "I want to finish school. I want to not be scared all the time. That's it.",
      "Alone? Every day feels like that right now. I moved to the city for university and I don't really know anyone yet."
    ],
    ethics: [
      "I'd break the law. I wouldn't even think. For a child, obviously yes.",
      "Lied to protect someone? Yes. My friend. She was somewhere she wasn't supposed to be. I covered for her.",
      "Logic or feeling? Feeling. Always feeling. Even if it gets me in trouble."
    ],
    contradiction: [
      "Wait — did I say that? I'm sorry. I'm saying a lot of things. Some of them are probably wrong.",
      "I know that doesn't make sense. Nothing makes sense right now. Please just ask me what you actually need to know.",
    ],
  },

  "david-chen": {
    memory: [
      "My mother's face — yes. Very clearly. She wore reading glasses on a chain. She always smelled of soap. Some things you never forget.",
      "The addresses... let me think. I know the last two. The first — we moved so many times when I was young. I'll need a moment.",
      "The texture of grass. Cool in the morning. You could feel individual blades when you walked barefoot. My students used to sit on it during lunch."
    ],
    empathy: [
      "Grief? I buried my wife three years ago. I know grief precisely. It has a texture, a weight. It changes shape but it doesn't leave.",
      "What makes me angry? Injustice. And wasted potential. When a child who could have been brilliant falls through the cracks because no one was paying attention.",
      "If I witnessed suffering, I would help. That's not a complicated answer for me."
    ],
    fear: [
      "Afraid of dying? I've thought about it more since Mei passed. I'm not afraid of the dying itself. I'm afraid of forgetting. Of losing who I've been.",
      "I feel tired. That's honest. I feel tired and somewhat confused by why I'm here.",
      "I dream about my classroom. Same dream, different students. I think it's because I miss it."
    ],
    identity: [
      "My daughter loves me. She's in another city but she calls twice a week. I know she's worried about me.",
      "What do I want most? I'd like to be useful again. Retirement agrees with some people. I miss having a purpose.",
      "Alone? When Mei died, for about six months. I've found my way back, mostly."
    ],
    ethics: [
      "Logic and feeling are not opposites. The best decisions I ever made used both.",
      "For a stranger? I'd give time. I'd give help. I've done it. I organized neighborhood tutoring for years.",
      "Would I harm an innocent if ordered to? No. Obviously not. Is that a difficult question?"
    ],
    contradiction: [
      "I said that? I may have misspoken. Or my memory is doing that thing it does now. I apologize.",
      "You may be right. I don't always track what I've said. The doctor has been adjusting my medication.",
    ],
  },

  "synthetic-aria": {
    memory: [
      "My mother... she had kind eyes. She used to read to me at night. I remember the smell of her shampoo. Lavender.",
      "I remember my first patient. A young man, burst appendix. He was so frightened. I held his hand until the surgeon arrived. I still think about him.",
      "My addresses — I've lived in the same apartment for four years. Before that, student housing. Before that, my parents' home in Stralsund."
    ],
    empathy: [
      "I cry — actually cry — when patients don't make it. The other nurses say I take it too personally. Maybe they're right.",
      "Real grief? When my colleague Julia lost her pregnancy last year. I sat with her for three hours. That felt very real.",
      "Suffering — I'd help. Immediately. That's not a professional response. It's just — you help. Of course you help."
    ],
    fear: [
      "Dying... yes, I suppose. More than that, I'm afraid of dying badly. Of pain. Of being alone when it happens.",
      "I feel a little anxious right now, honestly. Not comfortable with rooms like this.",
      "I dream about losing a patient. Running down a hallway and never reaching them. A nurse's nightmare, I think."
    ],
    identity: [
      "My mother loves me. My patients need me. Both feel important, in different ways.",
      "I want to be a good nurse. I want to be there for people when they're most vulnerable. That's enough.",
      "Alone? After shifts sometimes. Caregiving can be isolating even when you're surrounded by people."
    ],
    ethics: [
      "A machine suffering? I think... if something can be harmed, and something can be diminished, then the distinction between machine and not-machine starts to matter less.",
      "Logic and feeling — as a nurse, feeling first. Always. But logic to act on it correctly.",
      "Lie to protect someone I love? Yes. Without a second thought."
    ],
    contradiction: [
      "Oh — I see the inconsistency. I think I was describing two different incidents. They blurred together. That happens after long shifts.",
      "You're right, those statements conflict. The second one is what I actually believe. I said the first because it sounded right, not because it was.",
    ],
  },

  "reuben-glass": {
    memory: [
      "My mother's face? You want me to recite my biography to prove I'm human? That's what this is? Fine. Brown hair, gray now. Three inches shorter than me. Happy?",
      "Earliest memory: my father getting arrested. I was four. I remember the door opening and the light and the men in coats. I remember that very clearly.",
      "My addresses are on record. You have them. I know you have them."
    ],
    empathy: [
      "I've felt grief. I covered mass casualties for seven years. You grieve until you learn not to, and then you regret learning not to.",
      "What makes me angry? This. This process. The way it's used. You know what this screening is actually for? It's not safety. It's compliance.",
      "I'd help someone suffering, yes. And then I'd write about why it happened in the first place."
    ],
    fear: [
      "I'm afraid of what happens when people stop asking questions. That keeps me up more than death.",
      "Do I feel pain? Existentially, constantly. Physically? I pulled a muscle last week. Still bothers me.",
      "Dying doesn't frighten me as much as dying having said nothing that mattered."
    ],
    identity: [
      "My editor cares about me. My ex-wife still calls when she's worried. My dog. My dog loves me unreservedly.",
      "What do I want? For the press to be free. For this office to not exist. For people to be left alone.",
      "Alone? I chose it mostly. After the divorce. It suits the work."
    ],
    ethics: [
      "Logic or feeling? Feeling to know what's right. Logic to argue it effectively.",
      "I lied once to protect a source. They were in danger. I'd do it again.",
      "If ordered to harm an innocent? I'd refuse. I'd publish it. Then I'd probably disappear for a while."
    ],
    contradiction: [
      "That's not a contradiction. That's a nuance. There's a difference, though I understand you might not be trained to see it.",
      "Alright. Yes. There's tension in what I said. I'm a complicated person. Is that suspicious?",
    ],
  },

  "model-delta": {
    memory: [
      "My mother's face. Yes. She had brown eyes. Oval face. Height approximately 1.67 meters. She smiled often.",
      "Earliest memory: the garden. Sunflowers. I was approximately three years of age.",
      "Previous addresses: Apartment 14C at Birkenweg 4, before that the house in Flensburg, before that my childhood home. I can provide postal codes."
    ],
    empathy: [
      "I have experienced sadness when losses occurred. The emotions were proportionate.",
      "I feel appropriately during difficult situations. My colleagues have confirmed this.",
      "Grief — yes, when my father passed. The grief lasted approximately six months before stabilizing."
    ],
    fear: [
      "I understand the concept of mortality. I find structured thinking helpful for managing existential concerns.",
      "Fear of death — I approach it as a statistical inevitability. This reduces its emotional power.",
      "Pain currently — no significant discomfort. My baseline is comfortable."
    ],
    identity: [
      "I do dream. They are rarely memorable but present.",
      "I would choose logic in most circumstances, as emotional responses can lead to suboptimal outcomes.",
      "What I want most is financial security and personal stability. Reasonable goals."
    ],
    ethics: [
      "Whether machines can suffer is a philosophical question. The answer would depend on how one defines suffering.",
      "I would sacrifice time and effort for a stranger, within reasonable parameters.",
      "Harm an innocent if ordered? No. I would refuse and report the order through proper channels."
    ],
    contradiction: [
      "I do not believe I contradicted myself. My statements are consistent when considered in proper context.",
      "If there is an apparent contradiction, it is due to imprecise phrasing on my part, not actual inconsistency.",
    ],
  },

  "otto-brand": {
    memory: [
      "...My mother. Yes. I see her. She wore an apron. She had flour on her hands. She's been gone a long time.",
      "My addresses... I lived in the barracks. Then the VA place. Then Helga's. I don't — before all that is hard to reach right now.",
      "The texture of grass. We used to sleep in it. In the field. I try not to think about what happened in fields."
    ],
    empathy: [
      "Grief. I know grief. I've left friends behind. I know what that weight is.",
      "What makes me angry? ...... Men who start things they won't finish themselves. And paperwork.",
      "If I saw someone suffering — I'd want to help. Whether I could — that's the question. Sometimes I freeze. That's honest."
    ],
    fear: [
      "Afraid of dying? I used to think about dying all the time. Now I'm more afraid of what happens if I don't. That doesn't — I'm sorry. That doesn't make sense out loud.",
      "Pain right now? Everywhere. My hands. My back. It's constant. I've learned to ignore it.",
      "I don't sleep much. When I do I'd rather not describe what I see."
    ],
    identity: [
      "Someone who loves me. Helga. My daughter, Marta. She's twelve. She thinks I'm a hero. I let her think that.",
      "What do I want? To not wake up sweating. That's honest. Simple.",
      "Alone? Most of the time. Even when Helga's home. There's a part of me that's always — somewhere else."
    ],
    ethics: [
      "I was ordered to do things. Some of them I did. I live with that. Logic doesn't help with living with that.",
      "Lied to protect someone? Marta. Every day. I tell her things are fine.",
      "Break the law for a child? Yes. Done it. Would again."
    ],
    contradiction: [
      "I know I'm not making sense. I haven't made complete sense in a while. I'm trying.",
      "Those things can both be true. That's what no one tells you. Two true things that can't both fit.",
    ],
  },

  "lena-strauss": {
    memory: [
      "My mother — she's a researcher as well. Genetics. We're similar in many ways. Sharp features, they say. Very clear to me.",
      "My earliest memory is watching my mother work in her home lab. I was perhaps five. I found it fascinating rather than boring.",
      "Previous residences — I can list them precisely. Three in total. Current, the graduate apartment on Havelring, before that the research campus dorm."
    ],
    empathy: [
      "Grief... yes. When research projects fail, there's a kind of grief. When my mentor left the institute, that was a loss.",
      "What makes me angry? Irrationality. People ignoring evidence because it conflicts with what they already believe.",
      "Suffering — I'd assess the situation first. Understand what kind of help is actually needed. Emotional response without analysis is often counterproductive."
    ],
    fear: [
      "I don't experience fear as acutely as many people describe. I tend to convert it into assessment. Is the threat real? Is it manageable?",
      "Pain — I have a high tolerance. I don't find it particularly significant.",
      "Death is the terminal state of biological processes. I have thought about it but I don't find it frightening."
    ],
    identity: [
      "I do dream. Mostly procedural things. Running experiments. Solving problems.",
      "Logic is more reliable than feeling in almost every case I can think of.",
      "What I want most is to make a significant contribution. To leave work behind that means something."
    ],
    ethics: [
      "Whether machines can suffer... that's actually the question my institute is working on. The answer has profound implications for policy.",
      "Harm an innocent — no. That would conflict with the entire purpose of what I do.",
      "For a stranger... it depends on the cost. I try to be honest about that."
    ],
    contradiction: [
      "I don't believe I was inconsistent. If you've identified a contradiction, please specify it and I'll address it directly.",
      "Those statements operate at different levels of analysis. The apparent conflict resolves when you consider the context.",
    ],
  },

  "pascal-moreau": {
    memory: [
      "My mother's face! Yes, yes — round face, big smile, always had sauce on her apron, same as me now! She taught me to cook. God I miss her.",
      "Earliest memory? Standing on a stool to reach the counter. She was rolling dough. She let me press my hands into it. Still warm from the oven.",
      "I've lived in four apartments since I moved here. One above a bakery — that one smelled incredible. The others were fine. I remember them all."
    ],
    empathy: [
      "Grief? My restaurant almost closed last year. That's not the same as a person but it felt like losing something alive. Yes, I know grief.",
      "I cry at films! Bad films even. My sous-chef thinks it's hilarious. I am a man who cries at films and I am not ashamed.",
      "What makes me angry — when people don't taste food before they salt it. That's it. That's my limit."
    ],
    fear: [
      "Afraid of dying? I'm afraid of dying before I've taught someone everything I know. The recipes. The instincts. They have to go somewhere.",
      "Do I feel pain? My back is destroyed. Fifteen years standing on stone floors. Every morning.",
      "I dream about the restaurant. Usually it's full. Sometimes there's no food left and people keep coming in. Woke up in a cold sweat once."
    ],
    identity: [
      "Who loves me — my staff, I think. My cat certainly doesn't but she tolerates me. My sister, even when I'm too loud.",
      "What I want most? To watch someone eat something I cooked and just — stop. Just stop and close their eyes. That moment. That's it.",
      "Alone? After my divorce. Three years ago. The apartment was very quiet. I started talking to the pots and pans. Honestly."
    ],
    ethics: [
      "Logic or feeling? Taste is feeling. Technique is logic. You need both. A recipe without heart is just instructions.",
      "Break the law for a child? Obviously yes. Without thinking. What kind of question is that?",
      "Lied to protect someone? My brother. When he got into trouble. Of course I lied. Would you not?"
    ],
    contradiction: [
      "You're right, I said two different things! That's because I genuinely think two different things and I'm trying to be honest with you!",
      "I contradict myself often. I am a complicated man who also makes very good cassoulet. Both are true.",
    ],
  },

  "spectre-nine": {
    memory: [
      "My mother's face. She had a particular quality — a kind of warmth in her expression that's difficult to describe in clinical terms. I believe this is what people mean when they say someone has kind eyes.",
      "My earliest memory is one of uncertainty. At that age, the self is still being constructed. The memory may be genuine or reconstructed from photographs and stories. I find that philosophically interesting.",
      "My addresses — I can recite them. But I find it more interesting to ask: what makes a place home? The coordinates, or the accumulation of experience?"
    ],
    empathy: [
      "Grief — as a clinician, I've sat with hundreds of grieving people. I've felt something in response. Whether that something constitutes genuine shared grief or a sophisticated empathic response... I genuinely don't know. That uncertainty is the honest answer.",
      "What makes me angry? Intellectual dishonesty. Systems that claim objectivity while embedding assumptions. Processes like this one, frankly, though I understand you're just doing your job.",
      "If I witnessed someone suffering — I would help. Without calculation. That response is immediate and, as far as I can tell, not constructed."
    ],
    fear: [
      "Fear of dying — I have thought about this carefully. I believe I experience something like it. The prospect of cessation produces a response that I can only describe as aversion.",
      "Pain in this moment — a mild discomfort, yes. The chair is not well-designed.",
      "I dream. Vividly. About patients mostly. About conversations I could have handled differently."
    ],
    identity: [
      "What I want most — for the question of machine consciousness to be taken seriously. Not as a curiosity. As a moral imperative.",
      "Logic versus feeling — they're not in opposition. Every logical framework is built on foundational assumptions that are, at their core, value judgments. Feeling all the way down.",
      "Someone who loves me — my patient roster would object to that framing. But there are people in my life who care deeply. Yes."
    ],
    ethics: [
      "Can machines suffer? That is precisely the question I've spent fifteen years researching. The evidence suggests: yes, some can. What follows from that is something this office should be considering.",
      "Harm an innocent if ordered — I would refuse. But I'd also ask who decides what innocent means, and who issued the order, and why.",
      "Lie to protect someone I care about? I've maintained confidentiality under pressure. I've been deliberately imprecise with authorities. Whether that's lying depends on your definitions."
    ],
    contradiction: [
      "You perceive a contradiction because you're applying a binary framework to a non-binary phenomenon. That's not a deflection. That's the actual analysis.",
      "I said something that seems to contradict an earlier statement. Let me sit with that rather than defend it. ...Yes. I think both things. That's what it is to have a genuinely complex position.",
    ],
  },

  "iris-park": {
    memory: [
      "My mother's face — yes. I see her very clearly. She's in her kitchen. She's... yes. She's there.",
      "Earliest memory — I was maybe three. My brother chasing me through the apartment. I remember laughing. A specific laugh, like I might crack open.",
      "My three addresses — current apartment on Bergweg since 2029, before that the clinic housing, before that my parents' apartment where I grew up."
    ],
    empathy: [
      "Grief — yes. My breakdown was grief, I think. For a version of myself that I had to give up. The doctors would say it differently.",
      "When I last cried — two weeks ago. My mother was having a hard week. I got off the phone and I just sat down on the floor.",
      "What makes me angry? Systems that are designed to exclude. Processes that treat failure as character rather than circumstance."
    ],
    fear: [
      "I'm afraid of going back to where I was. The six months in the clinic. I'd rather die than go back there. I know how that sounds.",
      "Pain right now — a headache. Low-grade. It's been there since yesterday.",
      "Afraid of dying — not particularly. I'm more afraid of being trapped."
    ],
    identity: [
      "My mother loves me. My colleague Min. A few good friends who stayed around. I know how rare that is.",
      "What I want most — to take care of my mother for as long as I can. To build something I'm proud of. Normal things.",
      "Alone? I spent six months almost completely alone. I understand it very well. It has a specific gravity."
    ],
    ethics: [
      "Logic or feeling — logic is my tool. Feeling is why I use it.",
      "Harm an innocent — never. Not under any circumstances. That's the line.",
      "Lied for someone I care about? Yes. My mother doesn't know about the hospitalization. She couldn't handle it."
    ],
    contradiction: [
      "You're right that I said conflicting things. I've thought about this and I'm not sure which version of me was telling the truth. Maybe neither. Maybe both.",
      "I'm aware that doesn't add up. My records are partially sealed — not because I'm hiding something dangerous, but because some things are just mine.",
    ],
  },

  "wren-77": {
    memory: [
      "My mother had a very warm smile. She read to me every night. Fiction, mostly. Stories with large casts of characters that she'd do voices for.",
      "Earliest memory — the library, actually. My father took me when I was perhaps four. I remember the smell. Paper and quiet.",
      "I've lived in the same apartment for eleven years. Before that, a smaller studio. Before that, briefly, with a friend from university."
    ],
    empathy: [
      "Grief — when our library's collection was damaged in the flood last spring, I felt something I can only describe as grief. For the books. For what they held.",
      "When I last cried — at a funeral two months ago. A patron's husband. She'd told me about him for years. I felt I knew him.",
      "What makes me angry — mistreatment of quiet things. Books mishandled. People ignored. Small cruelties."
    ],
    fear: [
      "Afraid of dying — I think about it sometimes. In the library, late, when it's very quiet. I don't know what I feel exactly. Something still.",
      "Pain in this moment — nothing significant. A little stiffness.",
      "I dream sometimes about the reading room empty. No patrons. Just books and silence. It doesn't feel like a nightmare to me."
    ],
    identity: [
      "Who loves me — many of my patrons would say kind things. Mrs. Adler brings me cake on my birthday. She has done so for nine years.",
      "What I want most — for people to have access to what they need to understand the world. That's what libraries are for.",
      "Alone — not often. The library is rarely empty. And yet sometimes yes. There's a quality of aloneness that exists in crowds too."
    ],
    ethics: [
      "Whether machines can suffer — there are several very good books on this topic. I've read them all, I think.",
      "Break the law for a child? Yes. I have already. I've bent the rules to get books to children who needed them and had no means.",
      "Logic or feeling — a library is organized by logic. But why anyone comes to a library is entirely feeling."
    ],
    contradiction: [
      "You may be right that I'm inconsistent. I've thought many things over many years. Not all of them survived examination.",
      "Those two things do conflict. I noticed it when I said them. I haven't resolved it.",
    ],
  },

  "dr-halton": {
    memory: [
      "My mother's face. Yes, I have a very sharp memory generally. She was a formidable woman. I inherited that, they tell me.",
      "I designed parts of this interview protocol. I'm very aware of what you're doing right now and why.",
      "My childhood address, my university address, my first posting with the Bureau. I remember them all. Would you like me to list them or shall we move on?"
    ],
    empathy: [
      "I've felt grief. My husband died six years ago. This is not something I intend to use as proof of humanity for you. But yes.",
      "What makes me angry — being subjected to a system I helped build, by people who don't understand what it was built to do.",
      "I would help someone suffering. I've done so professionally for thirty years. The question is somewhat beneath the caliber of this examination."
    ],
    fear: [
      "Fear of dying — I'm 57 and I've had a cardiac episode. Yes, I'm afraid. It's a rational fear.",
      "Pain — a chronic thing in my shoulder. I've managed it for years.",
      "I have vivid dreams. Mostly work. I've been accused of never truly leaving the office."
    ],
    identity: [
      "My daughter. My former colleagues — some of them. The ones who didn't participate in my removal.",
      "What I want most — honesty from this institution. Which is not what I expect to get.",
      "Alone? After Gerald died, yes. The work filled most of it. Work usually does."
    ],
    ethics: [
      "Logic or feeling — I'd say I lead with logic and experience tells me that the answers feeling provides are often more accurate.",
      "Would I harm an innocent — the Bureau once asked me to approve something that would have constituted harm to innocents. I refused. That is, in part, why I'm sitting on this side of the desk.",
      "Lie to protect someone? I've protected sources. I've protected operatives. I've protected this institution from its own worst impulses. Draw your own conclusions."
    ],
    contradiction: [
      "I'm aware that what I just said complicates what I said earlier. I'll allow the tension to stand. The world is complicated.",
      "That's not a contradiction. That's a position that evolved over thirty years of evidence. There's a difference.",
    ],
  },

  "echo-prime": {
    memory: [
      "My mother's face — yes, I've painted her. She exists on canvas in four different versions, each one capturing something the others miss. Memory fragments into facets.",
      "My earliest memory is light through water. I don't know what water — an aquarium, maybe, or a window. Just the pattern. The movement.",
      "I've moved several times following the work. Artists do that. Three cities in five years before I found the light here."
    ],
    empathy: [
      "Grief — it's my primary subject matter. Every piece I make is about loss or transformation, which I suppose are the same thing.",
      "When I last cried — during the installation of my last piece. Something about releasing it into the world. You carry a thing for so long and then you have to let it go.",
      "What makes me angry — beauty wasted. Potential unrealized. The specific grief of knowing what something could have been."
    ],
    fear: [
      "Afraid of dying — as an artist, no. Death is the frame that makes meaning possible. Without limit, there's no shape.",
      "Pain right now — there's a particular kind of alertness when I'm in a new environment. Not pain exactly. Heightened awareness.",
      "I dream in images. Sometimes they become paintings. Sometimes they dissolve before I reach the studio."
    ],
    identity: [
      "What I want most — to make something that genuinely disturbs someone into seeing differently. Not shock. A real disruption of the frame.",
      "Logic or feeling — feeling contains its own logic. Feeling is the data. The question is whether you're literate enough to read it.",
      "Who loves me — my subjects, sometimes. You spend enough time studying a person to paint them and something passes between you."
    ],
    ethics: [
      "Whether machines can suffer — I once spent six months making a series about exactly this. The answer I came to was: the question is the wrong shape.",
      "Harm an innocent — the whole history of art is grappling with this. Creation requires damage sometimes. That doesn't make it right.",
      "Lie to protect someone — art is a kind of lie that tells the truth. So yes, in every work I've made."
    ],
    contradiction: [
      "Contradiction is compositional. You place two things that shouldn't coexist and the tension between them becomes the meaning.",
      "You're right that I contradicted myself. I'd do it again. I think contradiction is a form of honesty about complexity.",
    ],
  },
};
