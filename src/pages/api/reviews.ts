import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const placeId = "ChIJY3XouSFzkEcROUvrBI7L9WM" // Fredy's Bodenbeläge
  const apiKey = process.env.GOOGLE_API_KEY

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    )

    const data = await response.json()

    if (data.result?.reviews) {
      res.status(200).json(data.result.reviews)
    } else {
      res.status(500).json({ error: "No reviews found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" })
  }
}
