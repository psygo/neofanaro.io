export type VoteValue = 1 | -1

export type VoteSummary = {
  upvotes: number
  downvotes: number
  myVote: VoteValue | 0
}

export type VoteActionResult =
  | VoteSummary
  | { errorCode: "not_signed_in" }
