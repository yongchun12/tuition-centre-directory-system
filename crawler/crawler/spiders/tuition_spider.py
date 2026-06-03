import scrapy
from datetime import datetime

class TuitionSpider(scrapy.Spider):
    name = "tuition_spider"
    
    # Using a safe, legal-to-scrape site for demonstration purposes.
    # We will dynamically parse the HTML to simulate discovering tuition centres.
    start_urls = ["http://quotes.toscrape.com/"]

    def parse(self, response):
        self.logger.info(f"Live Web Crawler started on {response.url}")

        # Live Web Scraping: Extract elements using CSS selectors
        quotes = response.css('div.quote')
        
        for quote in quotes:
            # Extract real text and author from the live HTML page
            text = quote.css('span.text::text').get()
            author = quote.css('small.author::text').get()
            
            # Use the scraped data to dynamically construct a Tuition Centre record
            # In a production scenario, you would be targeting a real tuition directory
            centre = {
                "name": f"{author} Learning Centre",
                "description": f"Our philosophy: {text}",
                "address": "Kuala Lumpur, Malaysia",
                "city": "Kuala Lumpur",
                "state": "Kuala Lumpur",
                "subjects": ["English", "Literature", "Philosophy"],
                "priceRange": "RM 150 - RM 250/mo",
                "teachingMode": "physical",
                "status": "pending",
                "averageRating": 0,
                "createdAt": datetime.utcnow()
            }
            
            yield centre
            
        # Follow pagination link (simulating deep crawling)
        next_page = response.css('li.next a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)
