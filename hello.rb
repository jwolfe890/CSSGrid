sentence = "The quick brown fox"

sentence.split(" ").each do |word| {
    word.reverse().join(" ")
}
end

console.log(sentence)

