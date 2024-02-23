<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiTest extends TestCase
{
    public function testBorads() : void
    {
        $response = $this->get('/api/boards');

        $response->assertStatus(200);
    }
}
