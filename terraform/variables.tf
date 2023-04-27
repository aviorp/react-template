# Tags
variable "project" {
  type        = string
  description = "The name of the project"
  default     = "papito-CI-CD-Solution-TF"
}
variable "createdBy" {
  type        = string
  description = "The name of the person who created the project"
  default     = "Terraform"

}

# General
variable "bucket_name" {
  type        = string
  description = "The name of the S3 bucket"
  default     = "avior-test-bucket4"
}
variable "aws_region" {
  type        = string
  description = "The AWS region to deploy to"
  default     = "us-east-1"
}

variable "env" {
  type        = string
  description = "The environment to deploy to"
  default     = "dev"
}


data "aws_iam_policy_document" "bucket_policy" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    sid    = "PublicReadGetObject"
    effect = "Allow"
    actions = [
      "s3:GetObject",
    ]
    resources = [
      "arn:aws:s3:::${var.bucket_name}/*",
    ]
  }
}
