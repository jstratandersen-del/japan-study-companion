import SwiftUI

struct ContentView: View {
    @State private var questionIndex = 0
    @State private var answerText = ""
    @State private var answerResult: AnswerResult = .idle
    @State private var revealProgress = false
    @State private var countdownValue = 10
    @State private var timerToken: Timer?
    @State private var timerProgress: Double = 1

    private var question: LessonQuestion {
        RestaurantSliceSeed.questions[questionIndex]
    }

    var body: some View {
        GeometryReader { geometry in
            HStack(spacing: 20) {
                leftPanel
                    .frame(width: geometry.size.width * 0.62)

                rightPanel
                    .frame(width: geometry.size.width * 0.38)
            }
            .padding(22)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(
                LinearGradient(
                    colors: [Color(red: 0.98, green: 0.96, blue: 0.92), Color(red: 0.94, green: 0.89, blue: 0.81)],
                    startPoint: .top,
                    endPoint: .bottom
                )
            )
        }
        .onAppear(perform: resetForCurrentQuestion)
        .onDisappear {
            timerToken?.invalidate()
        }
    }

    private var leftPanel: some View {
        VStack(spacing: 18) {
            HStack(alignment: .top) {
                Text("\(question.locationTitle) | \(question.sublevelTitle)")
                    .font(.system(size: 24, weight: .medium, design: .rounded))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 28)
                    .padding(.vertical, 16)
                    .background(Color.black.opacity(0.95))
                    .clipShape(Capsule())

                Spacer()

                HStack(spacing: 12) {
                    CountdownRing(progress: timerProgress)
                        .frame(width: 60, height: 60)
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Romaji assist")
                            .font(.caption)
                            .foregroundStyle(.secondary)
                        Text("\(countdownValue)")
                            .font(.system(size: 24, weight: .bold, design: .rounded))
                    }
                }
            }

            Spacer()

            VStack(spacing: 14) {
                Text(question.promptMode.uppercased())
                    .font(.system(size: 16, weight: .semibold, design: .rounded))
                    .tracking(2)
                    .foregroundStyle(.secondary)

                Text(question.promptPrimary)
                    .font(.system(size: 88, weight: .regular, design: .rounded))
                    .minimumScaleFactor(0.45)
                    .multilineTextAlignment(.center)
                    .lineLimit(3)

                if let secondary = question.promptSecondary, !secondary.isEmpty {
                    Text(secondary)
                        .font(.title3)
                        .foregroundStyle(.secondary)
                }
            }
            .frame(maxWidth: .infinity)

            Spacer()

            VStack(alignment: .leading, spacing: 10) {
                Text("Write your answer")
                    .font(.headline)

                TextEditor(text: $answerText)
                    .scrollContentBackground(.hidden)
                    .padding(14)
                    .frame(minHeight: 130)
                    .background(Color.white.opacity(0.88))
                    .overlay(
                        RoundedRectangle(cornerRadius: 24)
                            .stroke(Color(red: 0.78, green: 0.63, blue: 0.32).opacity(0.6), lineWidth: 2)
                    )
                    .clipShape(RoundedRectangle(cornerRadius: 24))
                    .font(.system(size: 34, weight: .regular, design: .rounded))

                HStack {
                    Button("Clear") {
                        answerText = ""
                        answerResult = .idle
                    }
                    .buttonStyle(.bordered)

                    Spacer()

                    if !normalized(answerText).isEmpty {
                        Button("Submit", action: submitAnswer)
                            .buttonStyle(.borderedProminent)
                            .tint(Color(red: 0.78, green: 0.49, blue: 0.16))
                    }
                }

                answerFeedbackView
            }

            choiceGrid
        }
        .padding(28)
        .background(
            RoundedRectangle(cornerRadius: 34, style: .continuous)
                .fill(Color.white.opacity(0.82))
        )
    }

    private var answerFeedbackView: some View {
        Group {
            switch answerResult {
            case .idle:
                Text(" ")
                    .font(.subheadline)
            case let .success(message):
                Text(message)
                    .font(.subheadline)
                    .foregroundStyle(Color.green)
            case let .failure(message):
                Text(message)
                    .font(.subheadline)
                    .foregroundStyle(Color.red)
            }
        }
    }

    private var choiceGrid: some View {
        VStack(spacing: 16) {
            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 16) {
                ForEach(question.choices) { choice in
                    VStack(spacing: 8) {
                        Text(choice.japanese)
                            .font(.system(size: 28, weight: .bold, design: .rounded))
                            .multilineTextAlignment(.center)

                        Text(choice.romaji)
                            .font(.title3)
                            .foregroundStyle(.white.opacity(0.95))
                            .opacity(revealProgress ? 1 : 0)
                            .animation(.easeInOut(duration: 1), value: revealProgress)
                    }
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity, minHeight: 118)
                    .background(
                        RoundedRectangle(cornerRadius: 28, style: .continuous)
                            .fill(Color.black.opacity(0.95))
                            .overlay(
                                RoundedRectangle(cornerRadius: 28, style: .continuous)
                                    .stroke(Color(red: 0.73, green: 0.61, blue: 0.33), lineWidth: 2)
                            )
                    )
                }
            }
        }
        .padding(18)
        .background(
            RoundedRectangle(cornerRadius: 32, style: .continuous)
                .fill(Color.black.opacity(0.92))
        )
    }

    private var rightPanel: some View {
        ZStack(alignment: .bottomLeading) {
            Image("restaurant-guide-v1")
                .resizable()
                .scaledToFill()
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .clipped()

            LinearGradient(
                colors: [Color.clear, Color.black.opacity(0.65)],
                startPoint: .top,
                endPoint: .bottom
            )

            VStack(alignment: .leading, spacing: 8) {
                Text(question.guidePrimary)
                    .font(.system(size: 42, weight: .medium, design: .rounded))
                    .foregroundStyle(.white)

                Text(question.guideSecondary)
                    .font(.system(size: 26, weight: .regular, design: .rounded))
                    .foregroundStyle(.white.opacity(0.96))
            }
            .padding(28)
        }
        .background(Color.black.opacity(0.9))
        .clipShape(RoundedRectangle(cornerRadius: 34, style: .continuous))
    }

    private func resetForCurrentQuestion() {
        timerToken?.invalidate()
        answerText = ""
        answerResult = .idle
        revealProgress = false
        countdownValue = 10
        timerProgress = 1

        timerToken = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { timer in
            if countdownValue == 0 && timerProgress <= 0 {
                revealProgress = true
                timer.invalidate()
                return
            }

            timerProgress = max(0, timerProgress - 0.01)
            let nextWhole = Int(ceil(timerProgress * 10))
            countdownValue = max(0, nextWhole)
        }
    }

    private func submitAnswer() {
        let candidate = normalized(answerText)
        let isCorrect = question.acceptedAnswers.contains { normalized($0) == candidate }

        if isCorrect {
            revealProgress = true
            answerResult = .success("Correct. Moving to the next prompt.")
            timerToken?.invalidate()

            DispatchQueue.main.asyncAfter(deadline: .now() + 0.9) {
                questionIndex = (questionIndex + 1) % RestaurantSliceSeed.questions.count
                resetForCurrentQuestion()
            }
        } else {
            revealProgress = true
            answerResult = .failure("Not quite. Compare against the Japanese choices first and try again.")
        }
    }

    private func normalized(_ value: String) -> String {
        value.replacingOccurrences(of: "\\s+", with: "", options: .regularExpression)
            .trimmingCharacters(in: .whitespacesAndNewlines)
    }
}

private struct CountdownRing: View {
    let progress: Double

    var body: some View {
        ZStack {
            Circle()
                .stroke(Color.black.opacity(0.14), lineWidth: 6)

            Circle()
                .trim(from: 0, to: progress)
                .stroke(
                    Color(red: 0.78, green: 0.49, blue: 0.16),
                    style: StrokeStyle(lineWidth: 6, lineCap: .round)
                )
                .rotationEffect(.degrees(-90))
        }
    }
}
