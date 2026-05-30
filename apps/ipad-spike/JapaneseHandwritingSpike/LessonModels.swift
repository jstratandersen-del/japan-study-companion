import Foundation

struct LessonChoice: Identifiable, Hashable {
    let id = UUID()
    let japanese: String
    let romaji: String
}

struct LessonQuestion: Identifiable {
    let id: String
    let locationTitle: String
    let sublevelTitle: String
    let promptMode: String
    let promptPrimary: String
    let promptSecondary: String?
    let guidePrimary: String
    let guideSecondary: String
    let acceptedAnswers: [String]
    let choices: [LessonChoice]
}

enum AnswerResult {
    case idle
    case success(String)
    case failure(String)
}

enum RestaurantSliceSeed {
    static let questions: [LessonQuestion] = [
        LessonQuestion(
            id: "Q-R-L1-S1-001",
            locationTitle: "Restaurant",
            sublevelTitle: "Food Words",
            promptMode: "How do you say",
            promptPrimary: "Tea",
            promptSecondary: nil,
            guidePrimary: "お茶をお願いします",
            guideSecondary: "Ocha o onegaishimasu",
            acceptedAnswers: ["お茶", "おちゃ"],
            choices: [
                LessonChoice(japanese: "お茶", romaji: "ocha"),
                LessonChoice(japanese: "水", romaji: "mizu"),
                LessonChoice(japanese: "肉", romaji: "niku"),
                LessonChoice(japanese: "魚", romaji: "sakana")
            ]
        ),
        LessonQuestion(
            id: "Q-R-L1-S4-001",
            locationTitle: "Restaurant",
            sublevelTitle: "Asking What Something Is",
            promptMode: "How do you say",
            promptPrimary: "\"What is this?\"",
            promptSecondary: nil,
            guidePrimary: "これは何ですか",
            guideSecondary: "Kore wa nan desu ka",
            acceptedAnswers: ["これは何ですか", "これはなんですか"],
            choices: [
                LessonChoice(japanese: "これは何ですか", romaji: "kore wa nan desu ka"),
                LessonChoice(japanese: "おすすめは何ですか", romaji: "osusume wa nan desu ka"),
                LessonChoice(japanese: "これをお願いします", romaji: "kore o onegaishimasu"),
                LessonChoice(japanese: "お会計お願いします", romaji: "okaikei onegaishimasu")
            ]
        ),
        LessonQuestion(
            id: "Q-R-L2-S1-001",
            locationTitle: "Restaurant",
            sublevelTitle: "Pointing and Ordering One Item",
            promptMode: "How do you say",
            promptPrimary: "\"This one, please.\"",
            promptSecondary: nil,
            guidePrimary: "これをお願いします",
            guideSecondary: "Kore o onegaishimasu",
            acceptedAnswers: ["これをお願いします", "これをください"],
            choices: [
                LessonChoice(japanese: "これをお願いします", romaji: "kore o onegaishimasu"),
                LessonChoice(japanese: "お茶をお願いします", romaji: "ocha o onegaishimasu"),
                LessonChoice(japanese: "おすすめは何ですか", romaji: "osusume wa nan desu ka"),
                LessonChoice(japanese: "水です", romaji: "mizu desu")
            ]
        )
    ]
}
